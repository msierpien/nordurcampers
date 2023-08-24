"use client";

import { z } from "zod";
import { useZorm } from "react-zorm";
import Textarea from "react-textarea-autosize";
import { ErrorGetter, FieldGetter } from "react-zorm/dist/types";
import { useState } from "react";

const FormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  phoneNumber: z.string(),
  message: z.string().min(10),
});

function Field({
  label,
  field,
  errors,
  placeholder,
  isTextarea,
}: {
  label: string;
  placeholder: string;
  field: FieldGetter;
  errors: ErrorGetter;
  isTextarea?: boolean;
}) {
  return (
    <div className="mb-6">
      <label htmlFor={field()} className="block mb-1 text-sm">
        {label}
      </label>
      <div>
        {isTextarea ? (
          <Textarea
            name={field()}
            placeholder={placeholder}
            minRows={3}
            className={`w-full border rounded-3xl shadow-lg resize-none border-stone-300 focus:outline-none p-3 focus:ring-2 focus:ring-accent focus:ring-offset-2 ${errors(
              "border-red-500",
            )}`}
          />
        ) : (
          <input
            type="text"
            name={field()}
            placeholder={placeholder}
            className={`w-full border rounded-full shadow-lg border-stone-300 focus:outline-none p-3 focus:ring-2 focus:ring-accent focus:ring-offset-2 ${errors(
              "border-red-500",
            )}`}
          />
        )}
      </div>
      {errors((e) => (
        <div className="text-red-700 text-xs mt-1">{e.message}</div>
      ))}
    </div>
  );
}

export function ContactForm({ formId }: { formId: string }) {
  const [state, setState] = useState<"success" | "failure" | undefined>(
    undefined,
  );

  const zo = useZorm("signup", FormSchema, {
    async onValidSubmit(e) {
      e.preventDefault();
      const response = await fetch(`https://submit-form.com/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(e.data),
      });

      if (response.ok) {
        zo.form?.reset();
        setState("success");
      } else {
        setState("failure");
      }
    },
  });

  return (
    <div className="lg:w-[25vw] lg:min-w-[450px] lg:max-w-[550px] border border-stone-300 shadow-xl p-4 bg-stone-100 rounded-xl">
      {state && (
        <div className="mb-12 p-8 radius ring-4 ring-highlight">
          <div className="font-bold text-xl mb-3">
            {state === "success" ? (
              <>Thank you for reaching out! 🙏</>
            ) : (
              <>Ouch, something went wrong! 🥺</>
            )}
          </div>
          <div>
            {state === "success" ? (
              <>
                Twoja wiadomość została wysłana! Odpowiem na nią tak szybko jak jest to możliwe.
              </>
            ) : (
              <>You probably haven&apos;t <a href="https://github.com/datocms/next-minimalistic-photography/tree/main#setup-formspark" className="underline underline-offset-4">setup FormSpark</a> yet?</>
            )}
          </div>
        </div>
      )}
      <form ref={zo.ref}>
        <Field
          label="Twoje Imię i Nazwisko*"
          placeholder="Podaj proszę swoje imię i Nazwisko"
          field={zo.fields.name}
          errors={zo.errors.name}
        />
        <Field
          label="Twój email*"
          placeholder="Podaj proszę swój adres email"
          field={zo.fields.email}
          errors={zo.errors.email}
        />
        <Field
          label="Twój numer telefonu"
          placeholder="Podać proszę swój numer telefonu"
          field={zo.fields.phoneNumber}
          errors={zo.errors.phoneNumber}
        />
        <Field
          label="Twoja wiadomość*"
          placeholder="Witaj, chciałbym zarezerwować kampera na ..."
          field={zo.fields.message}
          errors={zo.errors.message}
          isTextarea={true}
        />

        <button
          disabled={zo.validation?.success === false}
          type="submit"
          className="uppercase tracking-widest  block w-full font-bold p-4 bg-accent shadow-lg text-white border-accent-400 rounded-full drop-shadow focus:ring-2 ring-offset-2 ring-accent focus:outline-none hover:opacity-90 active:opacity-70"
        >
          Wyślij mi wiadomość!
        </button>
      </form>
    </div>
  );
}
