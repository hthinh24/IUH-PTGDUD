import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import SignupDialog from "../../components/auth/SignupDialog";

export default function SignupPage() {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <AuthLayout>
      <SignupDialog onLoginClick={handleLoginClick} />
    </AuthLayout>
  );
}
