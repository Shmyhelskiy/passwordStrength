import PasswordForm from "./components/PasswordForm";

const App = () => {
  return (
    <div>
      <header className="w-full flex justify-center items-center mt-20">
        <h1 className="p-2 text-2xl font-bold">Check your password</h1>
      </header>
      <PasswordForm></PasswordForm>
    </div>
  );
}

export default App;
