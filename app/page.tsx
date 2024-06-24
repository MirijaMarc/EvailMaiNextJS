import { redirect } from "next/navigation";
import Dashboard from "./admin/page";
import Client from "./client/page";
import { Foot, Head } from "./lib/css";


export default function Home() {
  const user : string = 'Mirja';
  if (user == 'Mirija'){
    redirect('/client')
  }else{
    redirect('admin')
  }

}
