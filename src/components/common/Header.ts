import { logout, getUser } from "@/utils/auth";

const Nav = () => {
  const user = getUser();

  return /* HTML */ `<nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      ${user
        ? `<li><a href="/" class="text-blue-600">홈</a></li>
      <li><a href="/profile" class="text-gray-600">프로필</a></li>
      <li><a href="/" class="text-gray-600" id="logout">로그아웃</a></li>`
        : `<li><a href="/" class="text-blue-600">홈</a></li>
      <li><a href="/login" class="text-gray-600">로그인</a></li>`}
    </ul>
  </nav>`;
};

const Header = () => {
  const template = () =>
    /* HTML */ `<header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>
      ${Nav()} `;

  const setEventHandlers = () => {
    const handleClick = () => {
      logout();
    };

    document.getElementById("logout")?.addEventListener("click", handleClick);
  };

  return {
    template,
    setEventHandlers,
  };
};

export default Header;
