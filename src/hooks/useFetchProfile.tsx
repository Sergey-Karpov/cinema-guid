import { fetchProfile, queryClient } from "@/api/api";
import { AppDispatch } from "@/store";
import { setUser } from "@/store/userSlice";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

const useFetchProfile = () => {
  const dispatch: AppDispatch = useDispatch();

  const { mutateAsync, isPending, isError } = useMutation(
    {
      mutationFn: fetchProfile,
      onSuccess: (meData) => {
        dispatch(setUser(meData));
        queryClient.invalidateQueries({ queryKey: ["users", "me"] });
      },
      onError: (error) => {
        console.error("Failed to fetch profile:", error);
      },
    },
    queryClient
  );

  const updateProfile = async () => {
    try {
      await mutateAsync();
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return { updateProfile, isPending, isError };
};

export default useFetchProfile;
