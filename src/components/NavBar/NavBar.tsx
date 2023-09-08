import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ArrowTopRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import LogoIcon from "../Icons/logo";

export default function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between gap-2 p-2">
      <div className="flex flex-row justify-start gap-2">
        <Link href={"/"}>
          <div className="h-8 w-8 ">
            <LogoIcon />
          </div>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/devs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Devs
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <a
        href="https://github.com/foresthpark/yycdevs"
        target="_blank"
        rel="noreferrer noopener"
        className="flex flex-row items-center gap-1 rounded-lg border-[1px] border-black px-2 py-1"
      >
        <span className="text-sm">Github</span>{" "}
        <GitHubLogoIcon className="h-4 w-4" />
        <ArrowTopRightIcon className="h-4 w-4" />
      </a>
    </div>
  );
}
