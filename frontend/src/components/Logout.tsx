"use client";
import logoutAction from '@/actions/logout-action'
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button'

export default function Logout() {
  const router = useRouter();

  async function handleLogout() {
    const result = await logoutAction();
    if (result.ok) router.push("/");
  }
  return (
    <Button onClick={async () => handleLogout()}>Logout</Button>
  )
}
