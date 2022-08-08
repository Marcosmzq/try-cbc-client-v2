import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Divider,
  VStack,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useChangePasswordWithTokenMutation } from "../../graphql/generated/graphql";
import { supportEmail } from "../../utils/supportEmail";
import { DisplayGraphQLErrorDefault } from "../display-errors/graphql";
import { FormFieldInput } from "../form-field/input";

type FormData = {
  access_token: string;
  newPassword: string;
  confirmNewPassword: string;
};

interface ChangePasswordWithTokenFormProps {
  access_token: string;
}

export const ChangePasswordWithTokenForm: React.FC<
  ChangePasswordWithTokenFormProps
> = ({ access_token }) => {
  const [mutationErrors, setMutationErrors] = useState<String[]>([]);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm<FormData>();

  const [changePasswordMutation, { data }] = useChangePasswordWithTokenMutation(
    {
      variables: {
        access_token,
        newPassword: getValues().newPassword,
        confirmNewPassword: getValues().confirmNewPassword,
      },
      onError(err) {
        setMutationErrors([err.message]);
      },
    }
  );
  const onSubmit = async () => {
    setMutationErrors([]);
    await changePasswordMutation();
    reset();
  };
  return (
    <>
      {!data ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack
            w="100%"
            spacing={4}
            divider={<Divider orientation="horizontal" />}
          >
            <FormFieldInput
              formFieldLabel="Nueva contraseña"
              inputType="password"
              inputPlaceholder="Escribi una nueva contraseña"
              inputName="newPassword"
              isInvalid={errors.newPassword ? true : false}
              errorMessage={
                errors.newPassword ? errors.newPassword.message : ""
              }
              register={register("newPassword", {
                required: "Este campo es requerido",
                minLength: {
                  value: 8,
                  message: "Ingresa por lo menos 8 caracteres",
                },
              })}
            />
            <FormFieldInput
              formFieldLabel="Confirmar nueva contraseña"
              inputType="password"
              inputPlaceholder="Confirmar nueva contraseña"
              inputName="confirmNewPassword"
              isInvalid={errors.confirmNewPassword ? true : false}
              errorMessage={
                errors.confirmNewPassword
                  ? errors.confirmNewPassword.message
                  : ""
              }
              register={register("confirmNewPassword", {
                required: "Este campo es requerido",
                minLength: {
                  value: 8,
                  message: "Ingresa por lo menos 8 caracteres",
                },
                validate: {
                  confirmNewPasswordIsValid: () => {
                    const values = getValues();
                    if (values.confirmNewPassword !== values.newPassword) {
                      return "Las contraseñas no coinciden";
                    }
                  },
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
              Cambiar contraseña
            </Button>
            <DisplayGraphQLErrorDefault mutationErrors={mutationErrors} />
            {mutationErrors.length >= 1 && (
              <Text variant="body1" color="red.400">
                Ha ocurrido un error, quiza el link que usaste ya expiró.
                Solicitá otro y proba nuevamente o comunicate al soporte.{" "}
                {supportEmail}
              </Text>
            )}
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
            Application submitted!
          </AlertTitle>
          <AlertDescription maxWidth={["100%", "sm"]}>
            Thanks for submitting your application. Our team will get back to
            you soon. mirar en spam
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};
