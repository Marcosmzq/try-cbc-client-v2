import { VStack, Divider, Select, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useAddTriviaAnswerMutation } from "../../graphql/generated/graphql";
import { DisplayGraphQLErrorDefault } from "../display-errors/graphql";
import { FormFieldTextarea } from "../form-field/textarea";

type FormData = {
  statement: string;
  isTrue: string;
};

interface AddAnswerFormProps {
  trivia_id: number;
}

export const AddAnswerForm: React.FC<AddAnswerFormProps> = ({ trivia_id }) => {
  const [mutationErrors, setMutationErrors] = useState<String[]>([]);
  const history = useHistory();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>();

  const [createTriviaAnswerMutation, { data, loading, error }] =
    useAddTriviaAnswerMutation({
      variables: {
        trivia_id,
        statement: getValues().statement,
        isTrue: getValues().isTrue === "true" ? true : false,
      },
      onCompleted(data) {
        console.log({
          created: data ? true : false,
          id: data.createTriviaAnswer.id,
          data,
        });
      },
      onError(err) {
        setMutationErrors([err.message]);
        err && alert("error!");
      },
    });

  const onSubmit = async () => {
    setMutationErrors([]);
    await createTriviaAnswerMutation();
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack spacing={4} divider={<Divider orientation="horizontal" />}>
        <Select
          my={6}
          variant="filled"
          size="lg"
          placeholder="Seleccionar si la respuesta es verdadera o falsa"
          isFullWidth
          id="isTrue"
          {...register("isTrue", {
            required: "This is required",
          })}
        >
          <option value={"true"}>Verdadera</option>
          <option value={"false"}>Falsa</option>
        </Select>
        <FormFieldTextarea
          formFieldLabel="Enunciado"
          inputType="text"
          inputPlaceholder="Escribi el enunciado"
          inputName="statement"
          isInvalid={errors.statement ? true : false}
          //@ts-ignore
          errorMessage={errors.statement ? errors.statement.message : ""}
          register={register("statement", {
            required: "Este campo es requerido",
          })}
        />
        <Button
          w={["100%", "sm"]}
          variant="primarySolid"
          isLoading={isSubmitting}
          type="submit"
        >
          crear respuesta
        </Button>
        <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
      </VStack>
    </form>
  );
};
