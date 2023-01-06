export function Footer() {
  return (
    <div className="justify-between text-left items-start content-center text-slate-800 w-full px-6 py-5 bg-slate-100 dark:bg-slate-800 dark:text-white md:px-24 sm:grid-cols-1 h-3/4 md:h-1/3 grid grid-cols-1 gap-10 md:gap-6 md:grid-cols-3">
      <div>
        <a href="#" className="text-3xl">
          Photo<strong className="text-red-600">Book</strong>
        </a>
        <p className="flex items-center mt-4 text-xs text-slate-500 mobile:mt-0">
          powered by{" "}
          <img
            width="100%"
            height="100%"
            className="w-20 ml-2 brightness-50 dark:brightness-[1000]"
            src="https://pexels-help.zendesk.com/hc/en-us/article_attachments/900007787843/White_Logo_on_Transparent.png"
            alt="Pexels Logo"
          />
        </p>
      </div>
      <div>
        <h4 className="text-xl font-bold text-red-600">Social Media</h4>
        <ul>
          <li>
            <a
              className="hover:text-red-500 transition-all"
              href="https://www.instagram.com/uildez/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              className="hover:text-red-500 transition-all"
              href="https://www.github.com/uildez"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className="hover:text-red-500 transition-all"
              href="https://www.linkedin.com/in/uildes-dem%C3%A9trio/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-xl font-bold text-red-600">Anwers?</h4>
        <a
          className="text-base font-extrabold hover:text-red-600 transition-all"
          href="mailto:uildesdacosta@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          uildesdacosta@gmail.com
        </a>
        <div className="footer-slogan text-slate-500">
          You are welcome to send a message.
        </div>
      </div>
    </div>
  );
}
