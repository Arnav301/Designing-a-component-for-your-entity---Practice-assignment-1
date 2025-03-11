// write the component code here

// cart/components/Usercard.jsx
import React from "react";

const Usercard = () => {
  // Static user details
  const profilePhoto = "https://media.licdn.com/dms/image/v2/D5603AQFsn4EVjtnyEA/profile-displayphoto-shrink_200_200/B56ZUvAyysGUAc-/0/1740250494770?e=2147483647&v=beta&t=dn-TtWqfVD4Vu_FmZ1TV3uIem8v6iT4aqkSTkjDUzo4"; // Dummy profile image
  const name = "Abc421";
  const email = "abc1123@gmail.com";
  const phone = "+91 6729374xxx";
  const address = "123 Banglore,India ";

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl p-4 border border-gray-200">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto border-2 border-gray-300"
      />
      <h2 className="text-lg font-semibold text-center mt-3">{name}</h2>
      <p className="text-sm text-gray-600 text-center">{email}</p>
      <p className="text-sm text-gray-600 text-center">{phone}</p>
      <p className="text-sm text-gray-600 text-center">{address}</p>
    </div>
  );
};

export default Usercard;
