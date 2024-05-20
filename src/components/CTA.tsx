import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
        <div className="max-w-xl md:mx-auto">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Welcome to Todo App
          </h3>
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
          Organize Your Tasks Effortlessly
          </h3>
          <p className="mt-3 text-gray-600">
          Stay organized and focused with our simple and intuitive Todo App. Whether you&apos;re managing personal projects, planning your day, or collaborating with a team, our app has everything you need to stay on top of your tasks.
          </p>
        </div>
        <div className="flex gap-3 items-center mt-4 md:justify-center">
          <Link
            href="/todos"
            className="inline-block py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg shadow-md hover:shadow-none"
          >
            Get started
          </Link>
          <Link
            href="/auth/signup"
            className="inline-block py-2 px-4 text-gray-800 font-medium duration-150 border hover:bg-gray-50 active:bg-gray-100 rounded-lg"
          >
            Sign up
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
