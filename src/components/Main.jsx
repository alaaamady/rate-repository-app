import AppBar from "./AppBar";
import RepositoryList from "./RepositoryList";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn";

const Main = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

export default Main;
