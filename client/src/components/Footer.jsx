export default function Footer() {
  return (
    <footer className="bg-blue-500 p-4 text-white text-center fixed bottom-0 left-0 w-full">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} HCMUT. All rights reserved.</p>
      </div>
    </footer>
  );
}
