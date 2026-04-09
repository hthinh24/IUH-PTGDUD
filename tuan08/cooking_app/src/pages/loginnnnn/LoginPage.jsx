"use client";

import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout"
import LoginDialog from "../../components/auth/LoginDialog";

export default function LoginPage() {
  const navigate = useNavigate()
  const handleClose = () => {
    navigate("/")
  };

  return (
    <AuthLayout>
      <LoginDialog onClose={handleClose} />
    </AuthLayout>
  );
}
