"use client";
import { getUser } from "@/lib/apis/auth/userApi";
import { User } from "@/lib/utils/types/user";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MdEdit } from "react-icons/md";
import EditProfile from "./EditProfile";
import PasswordUpdate from "./PasswordUpdate";

const Profile = () => {
  const [user, setUser] = useState(undefined as unknown as User);
  const [isInput, setIsInput] = useState<boolean>(false);
  const [editingField, setEditingField] = useState<string | null>(null);

  useEffect(() => {
    getUser().then((res: User) => setUser(res));
  }, []);

  const handleEdit = (field: string) => {
    setIsInput(true);
    setEditingField(field);
  };
  return (
    <div className="w-full flex justify-center flex-col items-center">
      {/*<!-- Component: Rounded full lg sized image avatar with borders --> */}
      <div className="relative flex items-center justify-center max-w-60 max-h-60 text-white rounded-full">
        <Image
          src="https://res.cloudinary.com/dccaxfmwv/image/upload/v1709016066/403017_avatar_default_head_person_unknown_icon_z9dacc.png"
          alt="user name"
          title="user name"
          width="200"
          height="200"
          className="max-w-full border-2 border-white rounded-full"
        />
      </div>
      {/*<!-- End Rounded lg sized image avatar with borders --> */}
      <div className="flow-root max-w-4xl mt-5 rounded-lg border border-gray-100 py-3 shadow-sm">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-4 sm:gap-4">
            <dt className="font-medium text-gray-900">Name</dt>
            {isInput && editingField === 'username' ? (
              <EditProfile
                user={user}
                setIsInput={setIsInput}
                setUser={setUser}
                field="username"
              />
            ) : (
              <>
                <dd className="text-gray-700 sm:col-span-2">{user?.username}</dd>
                <dt className="font-medium text-gray-900">
                  <Button
                    variant="secondary"
                    onClick={() => handleEdit('username')}
                  >
                    <MdEdit className="text-xl" />
                  </Button>
                </dt>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-4 sm:gap-4">
            <dt className="font-medium text-gray-900">Email</dt>
            {isInput && editingField === 'email' ? (
              <EditProfile
                user={user}
                setIsInput={setIsInput}
                setUser={setUser}
                field="email"
              />
            ) : (
              <>
                <dd className="text-gray-700 sm:col-span-2">{user?.email}</dd>
                <dt className="font-medium text-gray-900">
                  <Button
                    variant="secondary"
                    onClick={() => handleEdit('email')}
                  >
                    <MdEdit className="text-xl" />
                  </Button>
                </dt>
              </>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-4 sm:gap-4">
            <dt className="font-medium text-gray-900">Password</dt>
            <dd className="text-gray-700 sm:col-span-2">Secret******</dd>
            <dt className="font-medium text-gray-900">
              <PasswordUpdate/>
            </dt>
          </div>
        </dl>
      </div>
    </div>
  );
};


export default Profile;
