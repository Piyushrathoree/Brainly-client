import React, { useEffect } from "react";
import useGetData from "@/hooks/useGetData";
import { MessageLoading } from "./ui/message-loading";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { toast } from "react-hot-toast";

const ProfilePage: React.FC = () => {
  const { getProfileData, data, loading } = useGetData();
  const [currentPassword, setCurrentPassword] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");

  useEffect(() => {
    getProfileData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <MessageLoading />
      </div>
    );
  }

  // Assuming the data object has a username field
  const username = data?.user?.name || "User";
  const date = new Date(data?.user?.createdAt || "").toLocaleDateString();
  const isVerified = data?.user?.isVerified?<div>true</div>:<div>false</div>;

  // Placeholder for the password change logic
  const handleChangePassword = async () => {


    // Implement password change API call here (replace with your actual API call)
    console.log("Change password clicked", { currentPassword, newPassword });
    // try {
    //   await api.changePassword(currentPassword, newPassword);
    //   toast.success('Password changed successfully!');
    //   setCurrentPassword('');
    //   setNewPassword('');
    // } catch (error) {
    //   toast.error('Failed to change password.');
    // }

    // Placeholder success message if API call is commented out
    toast.success(
      "Password meets basic strength requirements (API call not implemented)."
    );
  };

  return (
    <div className=" w-full ">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-neutral-300 mb-3">
          {username}'s Profile
        </h1>
        {/* Add more profile details here */}

        <p className="text-neutral-300 text-sm">
          Welcome to your profile page.
        </p>
        {/* Display other profile info from 'data' if available */}
        <div className="mt-10">Email : {data?.user.email}</div>
        <div className="mt-10 flex gap-1">Verified : {isVerified}</div>
        <div className="mt-10">Created at : {date}</div>

        <div className="bg-card rounded-lg shadow  mt-20">
          <form onClick={handleChangePassword} className="pt-20">
            <h2 className="text-2xl font-bold text-neutral-300 mb-4">
              Change Password
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-neutral-300 mb-1">
                  Current Password
                </label>
                <Input
                  type="text"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-1/2 bg-black/40 text-neutral-300 text-lg font-sans"
                  required
                />
              </div>
              <div>
                <label className="block text-neutral-300 mb-1">
                  New Password
                </label>
                <Input
                  type="text"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  className="w-1/2  bg-black/40 text-neutral-300 text-lg font-sans"
                />
              </div>
              <Button
                type="submit"
                className="bg-purple-500 hover:bg-purple-600"
              >
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20 absolute top-8 right-130 ">
        <Brain className="w-50 h-50 text-purple-600" />
      </div>
    </div>
  );
};

export default ProfilePage;
