import { VStack, Divider, Select, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  ExamList,
  useAddTriviaMutation,
} from "../../graphql/generated/graphql";
import { DisplayGraphQLErrorDefault } from "../display-errors/graphql";
import { FormFieldTextarea } from "../form-field/textarea";

type FormData = {
  isTrivia: string;
  isFlashcard: string;
  statement: string;
  feedback?: string;
};

interface AddTriviaFormProps {}

export const AddTriviaForm: React.FC<AddTriviaFormProps> = ({}) => {
  const [mutationErrors, setMutationErrors] = useState<String[]>([]);
  const history = useHistory();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>();

  const [createTriviaMutation, { data }] = useAddTriviaMutation({
    variables: {
      course_id: 1,
      exam: ExamList.First,
      statement: getValues().statement,
      isFlashcard: getValues().isFlashcard === "true" ? true : false,
      // isTrivia: getValues().isTrivia === "true" ? true : false,
      isTrivia: true,
      feedback: getValues().feedback ? getValues().feedback : undefined,
    },
    onCompleted(data) {
      console.log(data);
    },
    onError(err) {
      setMutationErrors([err.message]);
    },
  });

  const onSubmit = async () => {
    setMutationErrors([]);
    await createTriviaMutation();
    if (data) history.push(`/admin/create-answer/${data.createTrivia.id}`);
    reset();
  };
  useEffect(() => {
    if (data) history.push(`/admin/create-answer/${data.createTrivia.id}`);
  }, [data]);
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4} divider={<Divider orientation="horizontal" />}>
          {/*   <Select
            my={6}
            variant="filled"
            size="lg"
            placeholder="Seleccionar si es trivia"
            isFullWidth
            id="isTrivia"
            {...register("isTrivia", {
              required: "This is required",
            })}
          >
            <option value={"true"}>Verdadero</option>
            <option value={"false"}>Falso</option>
          </Select> */}
          <Select
            my={6}
            variant="filled"
            size="lg"
            placeholder="Seleccionar si es flashcard"
            isFullWidth
            id="isFlashcard"
            {...register("isFlashcard", {
              required: "This is required",
            })}
          >
            <option value={"true"}>Verdadero</option>
            <option value={"false"}>Falso</option>
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
          <FormFieldTextarea
            formFieldLabel="Feedback"
            inputType="text"
            inputPlaceholder="Escribi el feedback"
            inputName="feedback"
            isInvalid={errors.feedback ? true : false}
            //@ts-ignore
            errorMessage={errors.feedback ? errors.feedback.message : ""}
            register={register("feedback", {
              required: false,
            })}
          />
          <Button
            w={["100%", "sm"]}
            variant="primarySolid"
            isLoading={isSubmitting}
            type="submit"
          >
            crear trivia
          </Button>
          <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
        </VStack>
      </form>
    </>
  );
};
