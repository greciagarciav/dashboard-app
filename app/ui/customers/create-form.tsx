'use client';

// import CustomerImage from './upload-image';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { createCustomer, CustomerState } from '@/app/lib/actions';
import { useFormState } from 'react-dom';
import { ChangeEvent, useState } from "react";

export default function Form() {
  const initialState: CustomerState = { message: null, errors: {} };
  const [state, formAction] = useFormState(createCustomer, initialState);
  const [file, setFile] = useState<File | undefined>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;
    setFile(e.target.files?.[0]);
  };

  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Enter a name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"                
                placeholder="Enter a name"
                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            { state.errors?.name &&
              state.errors.name.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
          </div>
        </div>

        {/* Customer email */}
        <fieldset>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Enter an email
          </label>
          <div className="relative mt-2 rounded-md mb-4">
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"                
                placeholder="Enter an email"
                className="peer block w-full rounded-md border border-gray-200 py-2 text-sm outline-2 placeholder:text-gray-500"
              />              
            </div>
          </div>
          <div id="email-error" aria-live="polite" aria-atomic="true">
              { state.errors?.email &&
                state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          {/* Customer image */}
          <div >
            <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
              Upload image
            </label>
            <div>           
              <input
              id="image_url"
              name="image_url"
              type="file"
              className="bg-blue-600 text-white p-2 rounded block"
              onChange={handleFileChange}
              />       
            </div>
            <div id="image_url-error" aria-live="polite" aria-atomic="true">
              { state.errors?.image_url &&
                state.errors.image_url.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          </div>
          <div id="missing-field-error" aria-live="polite" aria-atomic="true">
              { state.message && (
                <p className="mt-2 text-sm text-red-500" key={state.message}>
                  {state.message}
                </p>
              )}
          </div>
        </fieldset>      
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/customers"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Customer</Button>
      </div>
    </form>
  );
}
