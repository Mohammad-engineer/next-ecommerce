"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const router = useRouter();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // temprorary
  const isLogin = true;

  const handleProfile = () => {
    if (isLogin) {
      setIsProfileOpen((prev) => !prev);
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image
        src="/profile.png"
        width={22}
        height={22}
        className="cursor-pointer"
        alt=""
        onClick={handleProfile}
      />
      {isProfileOpen && (
        <div className="absolute rounded-md top-12 right-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-50">
          <div
            className="w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            id="dropdown"
          >
            <div className="py-3 px-4">
              <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                Neil sims
              </span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                name@flowbite.com
              </span>
            </div>
            <ul
              className="py-1 text-gray-500 dark:text-gray-400"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  My profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                >
                  Account settings
                </a>
              </li>
            </ul>
            <ul
              className="py-1 text-gray-500 dark:text-gray-400"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="mr-2 w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                  </svg>
                  My likes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="mr-2 w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    {" "}
                    <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />{" "}
                    <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />{" "}
                    <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />{" "}
                  </svg>
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-between items-center py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span className="flex items-center">
                    <svg
                      className="mr-2 w-4 h-4 text-primary-600 dark:text-primary-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                    </svg>
                    Pro version
                  </span>
                  <svg
                    className="w-2.5 h-2.5 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
            <ul
              className="py-1 text-gray-500 dark:text-gray-400"
              aria-labelledby="dropdown"
            >
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <Image
        src="/notification.png"
        width={22}
        height={22}
        className="cursor-pointer"
        alt=""
        onClick={() => {
          setIsNotificationOpen((prev) => (!prev));
        }}
      />
      {isNotificationOpen && (
        <div className="absolute rounded-md w-[425px]  top-12 right-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-30">
          <div
            className="overflow-hidden text-base list-none bg-white rounded divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700"
            id="notification-dropdown"
          >
            <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              Notifications
            </div>
            <div>
              <a
                href="#"
                className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
                    alt="Bonnie Green avatar"
                  />
                  <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 rounded-full border border-white bg-primary-700 dark:border-gray-700">
                    <svg
                      className="w-2 h-2 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783ZM6 2h6a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2Zm7 5H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Z" />
                      <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                    </svg>
                  </div>
                </div>
                <div className="pl-3 w-full">
                  <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                    New message from{" "}
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Bonnie Green
                    </span>
                    : "Hey, what's up? All set for the presentation?"
                  </div>
                  <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                    a few moments ago
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                    alt="Jese Leos avatar"
                  />
                  <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-gray-900 rounded-full border border-white dark:border-gray-700">
                    <svg
                      className="w-2 h-2 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Zm11-3h-2V5a1 1 0 0 0-2 0v2h-2a1 1 0 1 0 0 2h2v2a1 1 0 0 0 2 0V9h2a1 1 0 1 0 0-2Z" />
                    </svg>
                  </div>
                </div>
                <div className="pl-3 w-full">
                  <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Jese leos
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      5 others
                    </span>{" "}
                    started following you.
                  </div>
                  <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                    10 minutes ago
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                    alt="Joseph McFall avatar"
                  />
                  <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-red-600 rounded-full border border-white dark:border-gray-700">
                    <svg
                      className="w-2 h-2 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      {" "}
                      <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />{" "}
                    </svg>
                  </div>
                </div>
                <div className="pl-3 w-full">
                  <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Joseph Mcfall
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-gray-900 dark:text-white">
                      141 others
                    </span>{" "}
                    love your story. See it and view more stories.
                  </div>
                  <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                    44 minutes ago
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex py-3 px-4 border-b hover:bg-gray-100 dark:hover:bg-gray-600 dark:border-gray-600"
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                    alt="Roberta Casas image"
                  />
                  <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-green-400 rounded-full border border-white dark:border-gray-700">
                    <svg
                      className="w-2 h-2 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                    </svg>
                  </div>
                </div>
                <div className="pl-3 w-full">
                  <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Leslie Livingston
                    </span>{" "}
                    mentioned you in a comment:{" "}
                    <span className="font-medium text-primary-700 dark:text-primary-500">
                      @bonnie.green
                    </span>{" "}
                    what do you say?
                  </div>
                  <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                    1 hour ago
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-11 h-11 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/robert-brown.png"
                    alt="Robert image"
                  />
                  <div className="flex absolute justify-center items-center ml-6 -mt-5 w-5 h-5 bg-purple-500 rounded-full border border-white dark:border-gray-700">
                    <svg
                      className="w-2 h-2 text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 14"
                    >
                      <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                    </svg>
                  </div>
                </div>
                <div className="pl-3 w-full">
                  <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Robert Brown
                    </span>{" "}
                    posted a new video: Glassmorphism - learn how to implement
                    the new design trend.
                  </div>
                  <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                    3 hours ago
                  </div>
                </div>
              </a>
            </div>
            <a
              href="#"
              className="block py-2 text-base font-medium text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
            >
              <div className="inline-flex items-center ">
                <svg
                  aria-hidden="true"
                  className="mr-2 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                View all
              </div>
            </a>
          </div>
        </div>
      )}
      <div
        className="relative cursor-pointer"
        onClick={() => {
          setIsCartOpen((prev) => !prev);
        }}
      >
        <Image
          src="/cart.png"
          width={22}
          height={22}
          className="cursor-pointer"
          alt=""
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-pinky rounded-full text-white text-sm flex items-center justify-center">
          2
        </div>
        {isCartOpen && (
          <div>
            <CartModal />
          </div>
        )}
      </div>
    </div>
  );
};

export default NavIcons;
