import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "PORTFOLIO", href: "#", current: true },
  { name: "ABOUT", href: "#about", current: false },
  { name: "CONTACT", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      <div className="w-full fixed z-50">
        <Disclosure as="nav" className="bg-[#2C3D4F] py-7">
          <div className="container mx-auto px-2 sm:px-6 lg:px-4">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 bg-[#19BC9B] text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="text-xl font-bold">Menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-between lg:items-stretch lg:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <a className="text-2xl font-bold" href="#">
                    START REACT
                  </a>
                </div>
                <div className="hidden lg:ml-auto lg:block">
                  <div className="flex">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-[#19BC9B] text-white"
                            : "text-white hover:text-[#19BC9B]",
                          "rounded-md px-4 py-4 text-base font-bold ml-14"
                        )}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <DisclosurePanel className="lg:hidden">
              <div className="px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-[#19BC9B] text-white"
                        : "text-white hover:text-[#19BC9B]",
                      "block rounded-md px-4 py-4 text-base font-bold my-7"
                    )}>
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </div>
        </Disclosure>
      </div>
    </>
  );
}
