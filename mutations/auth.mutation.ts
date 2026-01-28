// mutations/auth.mutation.ts
import { useMutation } from "@tanstack/react-query";
import { loginApi, registerApi } from "@/sevices/authApi";

export const useLogin = () => {
  return useMutation({
    mutationFn: (payload: any) => loginApi(payload),
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (payload: any) => registerApi(payload),
  });
  
};
