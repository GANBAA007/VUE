<template>
  <main class="px-0 overflow-hidden">
    <div class="px-[5%]">
      <div class="flex justify-between py-3 pb-24 max-fit:">
        <div class="mr-20">
          <img class="max-w-[500px]" src="/src/assets/logo.png" alt="" />
        </div>
        <ul class="flex max-md:hidden">
          <li class="px-4 pt-1"><a href="#">Features</a></li>
          <li class="px-4 pt-1"><a href="#">About us</a></li>
          <li class="px-4 pt-1"><a href="#">Blog</a></li>
          <li class="">
            <a href="#" class="bg-slate-100 rounded-lg block py-1 px-4"
              >Login</a
            >
          </li>
        </ul>
        <div class="md:hidden">
          <div class="relative">
            <button
              type="button"
              class="w-max text-right gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              id="menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <i class="fas fa-bars"></i>

            </button>

            <div
              id="dropdown-menu"
              class="hidden absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1" role="none">
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 text-sm"
                  role="menuitem"
                  >Features</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 text-sm"
                  role="menuitem"
                  >About us</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 text-sm"
                  role="menuitem"
                  >Blog</a
                >
                <a
                  href="#"
                  class="block px-4 py-2 text-gray-700 text-sm"
                  role="menuitem"
                  >Login</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="place-self-center">
        <div class="mx-auto text-center">
          <h class="text-5xl font-semibold">
            A powerful solution to grow <br />
            your startup. Fast!
          </h>
        </div>
        <div class="mx-auto text-center">
          <h1 class="mt-4 whitespace-pre-line">
            Organise, collaborate, and track progress seamlessly with our
            one-stop-shop startup growth tool.
          </h1>
        </div>
        <div class="flex max-w-fit mx-auto">
          <a
            href="#"
            class="block p-2 px-4 mt-5 mr-2 rounded-xl bg-blue-400 text-white"
          >
            <div class="w-full h-full">get started</div>
          </a>
          <a href="#" class="block p-2 px-4 mt-5 rounded-xl bg-slate-100 mr-2">
            <div class="fa-regular fa-camera w-full h-full">book a demo</div>
          </a>
        </div>
        <img
          class="mx-auto w-max pb-[72px] max-[550px]:hidden"
          src="/src/assets/hero-bg.png"
          alt=""
        />
        <img
          class="mx-auto w-max pb-16 min-[550px]:hidden"
          src="/src/assets/hero-bg-mobile.png"
          alt=""
        />
      </div>
    </div>
    <div class="bg-black">
      aa
      <div>
        <h1 class="text-white text-center text-5xl mt-24 mb-11">
          See how it works and get started <br />
          in less than 2 minutes
        </h1>
      </div>
      <div class="flex justify-center items-center mb-16">
        <img src="/src/assets/video-preview.png" alt="" />
      </div>
      <div class="flex justify-center">
        <a
          href="#"
          class="p-2 px-4 rounded-xl bg-blue-400 text-white flex mb-24"
        >
          <div class="w-fit">get started</div>
        </a>
      </div>
      <div class="flex justify-center">
        <div class="w-full bg-gray-900 h-[1px]"></div>
      </div>

      <div>
        <h1 class="text-white text-5xl mt-24 px-[5%] pb-16">
          Don't just take our word for it, see <br />
          the success stories from <br />
          businesses just like yours.
        </h1>
      </div>

      <div
        class="grid px-[5%] bg-black pb-24 grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1"
      >
        <div class="bg-white p-10 rounded-lg whitespace-pre-line h-min">
          <p class="text-base leading-relaxed break-normal text-ellipsis">
            “Our business has seen significant increase in productivity since we
            started using the Growth app.”
          </p>
          <div class="font-semibold pt-12">Katherine Smith</div>
          <div>Capodopera</div>
        </div>
        <div class="bg-white p-10 rounded-lg whitespace-pre-line h-min">
          <p class="text-base leading-relaxed break-normal text-ellipsis">
            “As a small business owner, it's important to have a tool that can
            help me keep track of everything. The Growth app has been a
            lifesaver for me, allowing me to manage my contacts, schedule
            appointments, and track progress all in one place..”
          </p>
          <div class="font-semibold pt-12">Jonathan Lee</div>
          <div>Red bolt</div>
        </div>
        <div class="bg-white p-10 rounded-lg whitespace-pre-line h-min">
          <p class="text-base leading-relaxed break-normal text-ellipsis">
            “The dashboards and reporting feature has provided valuable insights
            into our performance and helped us make data-driven decisions. It's
            a game changer for us.”
          </p>
          <div class="font-semibold pt-12">David Wilson</div>
          <div>Slide</div>
        </div>
        <div class="bg-white p-10 rounded-lg whitespace-pre-line h-min">
          <p class="text-base leading-relaxed break-normal text-ellipsis">
            “Our business has seen a significant increase in productivity since
            we started using the Growth app”
          </p>
          <div class="font-semibold pt-12">Katherine Smith</div>
          <div>Capodopera</div>
        </div>
      </div>
    </div>
    <div class="text-center mt-24 mb-11 text-black">
      <h1 class="text-5xl mb-6 font-semibold">Pricing</h1>
      <p>
        Start free and scale while you grow. No hidden fees. Unlimited users for
        free.
      </p>
    </div>
    <div class="">
      <div
        class="grid justify-items-center mb-12 grid-cols-2 gap-6 max-md:grid-cols-1"
      >
        <div class="rounded-lg bg-white max-w-96 p-14 align-middle">
          <div><h1 class="text-4xl mb-4">Simple</h1></div>
          <div>
            <p class="whitespace-pre-line mb-8">
              Keep track of your contacts, gain valuable insights, analyse live
              data and performance metrics.
            </p>
          </div>
          <div class="flex">
            <h1 class="text-4xl font-medium">Free</h1>
            <p class="pt-[15px] pb-7">*No credit card required</p>
          </div>
          <div class="flex justify-center">
            <div class="w-full bg-gray-600 h-[1px] mb-8"></div>
          </div>
          <div>
            <ul class="whitespace-pre-line">
              <li class="mb-3">Real-time monitoring</li>
              <li class="mb-3">Track key performance indicators</li>
              <li class="mb-3">Schedule appointments</li>
              <li class="mb-8">Organize, delegate and keep track of tasks</li>
            </ul>
            <div
              class="p-2 rounded-xl bg-blue-400 text-white max-w-full text-center"
            >
              <a class="justify-center block w-full h-full" href="#"
                >get started</a
              >
            </div>
          </div>
        </div>
        <div class="rounded-lg bg-black max-w-96 text-White p-14 align-middle">
          <div><h1 class="text-4xl mb-4 text-white">Premium</h1></div>
          <div>
            <p class="whitespace-pre-line mb-8 text-white">
              Keep track of your contacts, gain valuable insights, analyse live
              data and performance metrics.
            </p>
          </div>
          <div class="flex">
            <h1 class="text-4xl font-medium text-white">49$</h1>
            <p class="pt-[15px] pb-7 text-white">/month</p>
          </div>
          <div class="flex justify-center">
            <div class="w-full bg-gray-600 h-[1px] mb-8"></div>
          </div>
          <div>
            <div class="text-white mb-3 w-[100%] whitespace-pre-line">
              Everything from the free plan plus:
            </div>
            <ul class="whitespace-pre-line text-white">
              <li class="mb-3">Data-driven decisions</li>
              <li class="mb-3">Data visualisation</li>
              <li class="mb-3">Schedule appointments</li>
              <li class="mb-3">Store and organise contact</li>
              <li class="mb-8">
                Teal-time communication tools messaging and video conferencing
              </li>
            </ul>
            <div
              class="p-2 rounded-xl bg-blue-400 text-white max-w-full text-center"
            >
              <a class="justify-center block w-full h-full" href="#"
                >get started</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <p class="text-center mb-4 px-[7%]">
        All prices are in USD and charged per month with applicable taxes added
        at checkout.
      </p>
      <p class="text-center mb-[72px]">View features</p>
    </div>
    <footer class="px-[5%] pt-[109px] pb-10 bg-black">
      <div class="mr-20 mb-[42px]">
        <img src="/src/assets/logo-white.png" alt="" />
      </div>
      <div
        class="grid grid-cols-4 justify-evenly max-xl:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1"
      >
        <div
          class="whitespace-pre-line bg-white rounded-lg p-6 mb-[80px] w-auto"
        >
          <h1 class="text-xl mb-2">Subscribe to newsletter</h1>
          <p class="mb-5">
            Subscribe now to receive tips on how to take your business to the
            next level.
          </p>
          <div class="grid grid-cols-2 max-sm:grid-cols-1">
            <input
              type="email"
              placeholder="Enter your email"
              id="Email"
              name="Email"
              class="h-[48px] mr-4 border-stone-500 rounded-lg"
            />

            <a
              class="text-center px-4 rounded-xl w-[121px] bg-blue-400 text-white pt-3 max-sm:pt-2 py-2"
              href="#"
              ><div class="w-fit">Subscribe</div></a
            >
          </div>
        </div>
        <div class="mb-5 max-md:">
          <ul class="text-white ml-[131px] max-md:ml-[0px]">
            <li class="text-bold mb-6">Company</li>
            <li class="mb-2">About</li>
            <li class="mb-2">Our process</li>
            <li class="mb-2">Join our team</li>
          </ul>
        </div>
        <div class="mb-5">
          <ul class="text-white ml-[131px] max-md:ml-[0px]">
            <li class="text-bold mb-6">Resources</li>
            <li class="mb-2">News</li>
            <li class="mb-2">Research</li>
            <li class="mb-2">Recent Projects</li>
          </ul>
        </div>
        <div class="mb-5">
          <ul class="text-white ml-[131px] max-md:ml-[0px]">
            <li class="text-bold mb-6">contacts</li>
            <li class="mb-2">hello@growthapp.com</li>
            <li class="mb-2">@ketamne_</li>
          </ul>
        </div>
      </div>
    </footer>
  </main>
</template>

<script>
export default {
  mounted() {
    const menuButton = document.getElementById("menu-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    menuButton.addEventListener("click", () => {
      const isExpanded = this.$el.getAttribute("aria-expanded") === "true";

      this.$el.setAttribute("aria-expanded", !isExpanded);

      dropdownMenu.classList.toggle("hidden");
    });
  },
};
</script>

<style lang="scss" scoped></style>
