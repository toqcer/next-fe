import { getCurrentYear } from 'utils/dateFormatter';

export default function Footer() {
  return (
    <footer className="text-center mt-24  w-full text-xs py-7 text-muted">
      Copyright &copy; {getCurrentYear()} ToqCer
    </footer>
  );
}
