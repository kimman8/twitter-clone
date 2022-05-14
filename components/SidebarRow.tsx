import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
  title: string
}
function SidebarRow({ title, Icon }: Props) {
  return (
    <div className="group flex max-w-fit cursor-pointer items-center space-x-2 rounded-full px-4 py-3 text-black transition-all duration-200  hover:bg-gray-100 md:justify-start">
      <Icon className="h-6 w-6" />
      {/* text-twitter = twitter's blue colour - we configured it in the tailwind.config.js file */}
      <p className="hidden text-base font-light group-hover:text-twitter md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  )
}

export default SidebarRow
