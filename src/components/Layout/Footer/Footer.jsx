import Link from "next/link";
import { Container } from "reactstrap";

export default function Footer() {
  return (
    <footer>
        <Container>
            <div className="footer d-flex justify-content-between">
                <div>&#169; 2024 DomApp. All rights reserved.</div>
                <div>
                  <Link href="/privacy" className="privacy_link">Privacy Policy</Link>
                </div>
            </div>
        </Container>
    </footer>
  )
}
