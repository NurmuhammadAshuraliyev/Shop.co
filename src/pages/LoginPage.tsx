import { useRef, useState, type FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/ui/Spinner";
import { useUserStore } from "../store/user.store";
import axios from "axios";

// Bitta umumiy axios instance yaratamiz (optional, lekin tavsiya qilinadi)
const api = axios.create({
  baseURL: "https://authuser.duckdns.org/api",
  withCredentials: true, // cookie yuboriladi
});

export const LoginPage = () => {
  const { setUserData } = useUserStore();
  const navigate = useNavigate();
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  // Komponent yuklanganda tokenni cookie'dan tekshiradi
  useEffect(() => {
    api
      .get("/me")
      .then((res) => {
        if (res.data?.user) {
          setUserData(res.data.user);
          navigate("/");
        }
      })
      .catch(() => {
        // Token yo'q, yoki login qilinmagan
      });
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const email = emailInputRef.current?.value;
    const password = passwordInputRef.current?.value;

    try {
      setLoading(true);

      const response = await api.post("/auth/login", { email, password });

      if (response.status === 200 || response.status === 201) {
        toast.success("Login muvaffaqiyatli!");
        setUserData(response.data.user);
        navigate("/");
      } else {
        toast.error("Nomaʼlum status: " + response.status);
      }
    } catch (error: any) {
      console.error("Login error:", error);

      const message =
        error.response?.data?.message ||
        (error.response?.status === 409
          ? "Email yoki parol noto‘g‘ri."
          : "Login xatoligi yuz berdi");
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                ref={emailInputRef}
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm/6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="text-indigo-600 text-[12px] hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                ref={passwordInputRef}
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex cursor-pointer w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? <Spinner /> : "Sign In"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Not a member?{" "}
          <a href="/signup" className="text-indigo-600 hover:text-indigo-500">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};
