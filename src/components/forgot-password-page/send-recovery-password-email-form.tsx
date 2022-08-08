import {
  VStack,
  Divider,
  Button,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Center,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSendRecoveryPasswordEmailMutation } from "../../graphql/generated/graphql";
import { emailRegExp } from "../../utils/emailRegExp";
import { DisplayGraphQLErrorDefault } from "../display-errors/graphql";
import { FormFieldInput } from "../form-field/input";

type FormData = {
  email: string;
};

interface SendRecoveryPasswordEmailFormProps {}

export const SendRecoveryPasswordEmailForm: React.FC<
  SendRecoveryPasswordEmailFormProps
> = ({}) => {
  const [mutationErrors, setMutationErrors] = useState<String[]>([]);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>();

  const [sendRecoveryPasswordEmailMutation, { data, error }] =
    useSendRecoveryPasswordEmailMutation({
      variables: {
        email: getValues().email,
      },
      onError(err) {
        setMutationErrors([err.message]);
      },
    });

  const onSubmit = async () => {
    setMutationErrors([]);
    await sendRecoveryPasswordEmailMutation();
    reset();
  };

  return (
    <>
      {!data ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4} divider={<Divider orientation="horizontal" />}>
            <FormFieldInput
              formFieldLabel="Correo electronico"
              inputType="email"
              inputPlaceholder="Escribi tu correo electronico"
              inputName="email"
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email ? errors.email.message : ""}
              register={register("email", {
                required: "Este campo es requerido",
                minLength: {
                  value: 4,
                  message: "Ingresa por lo menos 4 caracteres",
                },
                pattern: {
                  value: emailRegExp,
                  message: "El email ingresado no es valido",
                },
              })}
            />
            <Button
              as={motion.button}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              w={["100%", "sm"]}
              variant="primarySolid"
              isLoading={isSubmitting}
              type="submit"
            >
              recuperar contraseña
            </Button>

            <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
          </VStack>
        </form>
      ) : (
        <Alert
          status="success"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          minHeight="200px"
          w="100%"
          p={[]}
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={3} fontSize="lg">
            Ya te enviamos un correo!
          </AlertTitle>
          <AlertDescription maxWidth={["100%", "sm"]}>
            Te enviamos un correo electronico con un link para recuperar tu
            cuenta. Revisa la casilla de spam si no lo encuentras.
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};
