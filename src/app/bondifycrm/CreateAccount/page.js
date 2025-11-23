
import dynamic from "next/dynamic";
const CreateAccount = dynamic(() => import("@/pages_sups/Products/BondifyCRM/BondifyCRM/CreateAccount"), {
  ssr: false,
});


export default function Page() {

  return (
    <div>
      <CreateAccount />
    
    </div>
  );
}
