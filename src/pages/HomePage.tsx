import LoginForm from '../components/LoginForm';
import MobileMockup from '../components/MobileMockup';
import SiteFooter from '../components/SiteFooter';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white dark:bg-black">
      <div className="mx-auto flex w-full max-w-[935px] flex-grow items-center justify-center pb-8 pt-8">
        <MobileMockup />
        <LoginForm />
      </div>
      <SiteFooter />
    </div>
  );
}
