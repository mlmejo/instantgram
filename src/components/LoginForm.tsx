import { FormEvent, useState } from 'react';
import TextInput from './TextInput';
import PasswordInput from './PasswordInput';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default function LoginForm() {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // Reset any previously flashed messages
    setErrorMsg('');
    setUser(null);

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      setErrorMsg('Server error occured. Please try again.');
    }

    const users = (await response.json()) as User[];

    // `find` method is used to get the first object
    // that is returned based on the provided callback function.
    const user = users.find((user) => {
      // Check if the given identifier matches with any
      // data stored in the mocked DB.
      //
      // Password is not used as the mocked DB does not
      // store any password attribute that we can compare to.
      if (
        user.username === identifier ||
        user.email === identifier ||
        user.phone === identifier
      ) {
        return user;
      }
    });

    if (!user) {
      setErrorMsg(
        'Sorry, your password was incorrect. Please double-check your password.',
      );
      return;
    }

    // Store the user ID into localStorage, if this
    // was an actual authentication flow where a JWT
    // is returned from the server, it should be stored as well.
    localStorage.setItem('userId', String(user.id));

    // Store the user in state as well, to display his/her name.
    // NOTE: Not actually useful in production state.
    setUser(user);
  }

  return (
    <div className="flex w-full max-w-[350px] flex-col">
      <div className="dark:border-ig-separator-dark border-ig-separator border px-10 pb-6 pt-12">
        <h1 className="text-center font-['Cookie'] text-5xl dark:text-white">
          InstanTgram
        </h1>

        <form onSubmit={handleSubmit} className="mt-8">
          {/*
            Labels with `sr-only` (screen reader only) are added
            for accessibility purposes.
          */}

          <label htmlFor="identifier" className="sr-only">
            Phone number, username, or email
          </label>
          <TextInput
            type="text"
            id="identifier"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            autoComplete="username"
            placeholder="Phone number, username, or email"
          />

          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <PasswordInput
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Password"
            className="mt-1.5"
          />

          <button
            type="submit"
            className="transiiton mt-3 w-full rounded-md bg-[#0095f6] py-1.5 text-sm font-semibold text-white duration-150 ease-in-out disabled:opacity-75"
            // Disable the log in button if no identifer or password is given.
            // This is similar to the actual Instagram site.
            disabled={!identifier || !password}
          >
            Log in
          </button>
        </form>

        <div className="mt-4 flex items-center justify-between gap-x-3">
          <div className="bg-ig-separator dark:bg-ig-separator-dark h-[0.5px] w-full"></div>
          <span className="text-ig-secondary-text dark:text-ig-secondary-text-dark text-sm font-medium">
            OR
          </span>
          <div className="dark:bg-ig-separator-dark bg-ig-separator h-[0.5px] w-full"></div>
        </div>

        <div className="mt-6 flex flex-col items-center">
          <a
            href="https://facebook.com"
            rel="noreferrer"
            className="group flex gap-x-2 text-sm font-medium text-ig-primary-button transition duration-150 ease-in-out hover:text-white"
          >
            <svg
              aria-label="Log in with Facebook"
              className="transition duration-150 ease-in-out group-hover:text-ig-primary-button"
              fill="currentColor"
              height="20"
              role="img"
              viewBox="0 0 16 16"
              width="20"
            >
              <title>Log in with Facebook</title>
              <g clipPath="url(#a)">
                <path
                  d="M8 0C3.6 0 0 3.6 0 8c0 4 2.9 7.3 6.8 7.9v-5.6h-2V8h2V6.2c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V8h2.2l-.4 2.3H9.2v5.6C13.1 15.3 16 12 16 8c0-4.4-3.6-8-8-8Z"
                  fill="currentColor"
                ></path>
              </g>
              <defs>
                <clipPath id="a">
                  <rect fill="currentColor" height="16" width="16"></rect>
                </clipPath>
              </defs>
            </svg>
            Log in with Facebook
          </a>

          {errorMsg && (
            <p className="mt-6 text-center text-sm text-red-500">
              Sorry, your password was incorrect. Please double-check your
              password.
            </p>
          )}

          {user && (
            <p className="mt-6 text-center text-sm text-green-500">
              Welcome {user.name}
            </p>
          )}

          <a
            href="https://www.instagram.com/accounts/password/reset"
            rel="noreferrer"
            className="text-ig-link mt-6 text-sm dark:text-white"
          >
            Forgot Password?
          </a>
        </div>
      </div>

      <div className="dark:border-ig-separator-dark border-ig-separator mt-3 flex items-center justify-center border py-5 dark:text-white">
        <p className="text-sm">
          Don't have an account?{' '}
          <a
            href="https://www.instagram.com/accounts/emailsignup/"
            rel="noreferrer"
            className="text-sm font-medium text-ig-primary-button"
          >
            Sign up
          </a>
        </p>
      </div>

      <div className="mt-4 text-center text-sm dark:text-white">
        Get the app.
      </div>

      <div className="mt-4 flex items-center justify-center gap-x-3">
        {/*
          rel="noreferrer"
          is set for security purposes. As these are
          external links, it is best to hide referrer
          information.
        */}

        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android"
          target="_blank"
          rel="nofollow noreferrer"
        >
          <img src="/google_play.png" alt="" className="h-10" />
        </a>

        <a
          href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=1%2C12%2C1930%2C886"
          rel="nofollow noreferrer"
        >
          <img src="/microsoft.png" alt="" className="h-10" />
        </a>
      </div>
    </div>
  );
}
