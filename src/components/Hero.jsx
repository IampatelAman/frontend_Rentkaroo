import React from "react"

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="max-w-6xl lg:mx-auto p-5 md:px-10 lg:px-0 w-full grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="font-bold text-[40px] leading-[48px] lg:text-[48px] lg:leading-[60px]">
            RentKaroo: Feel at Home, Whatever You Are!
          </h1>

          <p className="text-[20px] md:text-[24px] font-normal leading-[30px] md:leading-9 tracking-[2%]">
          RentKaroo is your go-to platform for finding rental homes or listing your property. Browse verified properties, connect with homeowners or renters, and handle everything in one place. Property owners can easily list rentals and reach a wide audience. Whether renting or listing, RentKaroo makes the process simple, fast, and secure. Start today!
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1522444195799-478538b28823?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center"
        />
      </div>
    </div>
  )
}

export default Hero
