import Link from "next/link";
import { Container } from "reactstrap";
import LanguageDropdown from "./Lang";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer d-flex justify-content-between">
          <div className="px-3">&#169; 2024 DomApp. All rights reserved.</div>
          <div className="px-3">
            <LanguageDropdown />
          </div>
          <div className="px-3">
            <Link href="/privacy" className="privacy_link">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
