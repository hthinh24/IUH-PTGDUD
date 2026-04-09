"use client";

import { useRouter } from "next/navigation";
import AuthLayout from "../../components/auth/AuthLayout";
import DiscoverDialog from "../../components/auth/DiscoverDialog";

export default function DiscoverPage() {
  const router = useRouter();

  const handleClose = () => {
    router.push("/");
  };

  const handleNext = () => {
    router.push("/login");
  };

  const handleSkip = () => {
    router.push("/");
  };

  return (
    <AuthLayout>
      <DiscoverDialog 
        onClose={handleClose}
        onNext={handleNext}
        onSkip={handleSkip}
      />
    </AuthLayout>
  );
}
