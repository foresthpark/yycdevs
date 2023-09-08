/* eslint-disable @next/next/no-img-element */
import React from "react";

const values = [
  {
    name: "Fork the Repository",
    description:
      "Visit the Github repo and fork the repository to your own account.",
  },
  {
    name: "Add your Information to the JSON",
    description:
      "Open the file './src/data/profiles.ts' and add your information according to the 'Profile' interface.",
  },
  {
    name: "Commit Your Changes",
    description:
      "After making your changes, commit them to your local repository with descriptive commit messages.",
  },
  {
    name: "Create a Pull Request (PR)",
    description:
      "Visit the main page of your forked repository on GitHub and click the 'New Pull Request' button. Provide a descriptive title and comment explaining your changes in the PR description and then click the 'Create Pull Request' button",
  },
  {
    name: "Wait for PR Approval",
    description:
      "After your PR is approved, your profile will be added to the list!",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-14">
        <div
          className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
          aria-hidden="true"
        />
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Do you want to add your profile to the list?
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                Visit the GitHub repo and add your profile by sending in a pr.
                Read the contribution guidelines or read the steps below.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="https://github.com/foresthpark/yycdevs"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-visible:outline-primary-600 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Add your profile
                </a>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80"
              alt=""
              className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </div>

      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Adding Your Profile
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {values.map((value) => (
            <div key={value.name}>
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-gray-600">{value.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}
