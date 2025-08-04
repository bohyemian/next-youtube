// https://ui.shadcn.com/docs/components/avatar
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

const UserIcon = ({ className }: { className?: string }) => {
  return (
    <Avatar className={cn("w-6 h-6", className)}>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  )
}

export default UserIcon