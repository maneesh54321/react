import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import SearchBar from "./SearchBar";
import { hasExpired } from "../../utils/common-utils";
import { logout } from "../../store/auth-slice";

const Header = () => {
  const items = useAppSelector((state) => state.cart.items);

  const token = useAppSelector((state) => state.auth.token);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const isLoggedIn = token && !hasExpired(token);

  const itemsQuantity = items
    .map((item) => item.quantity)
    .reduce((partialSum, a) => partialSum + a, 0);

  function handleLogout() {
    dispatch(logout());
    navigate("/auth/login");
  }

  return (
    <div className="main-nav container">
      <Link to="/" className="v-center">
        <svg
          viewBox="0 0 156 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo-img"
        >
          <g clipPath="url(#clip0_2271_104976)">
            <rect width="156" height="36" fill="white" />
            <path
              d="M56.307 23.6979C56.6873 23.4071 56.8752 22.991 56.8752 22.4452C56.8752 20.7137 56.6381 19.1567 56.1683 17.7697C55.6985 16.3872 55.014 15.2105 54.1147 14.2351C53.2199 13.2643 52.1371 12.5171 50.8799 12.0025C49.6182 11.488 48.1954 11.2285 46.616 11.2285C44.4595 11.2285 42.5356 11.7207 40.8489 12.7095C39.1621 13.6982 37.8422 15.0584 36.8803 16.7899C35.9228 18.5214 35.4441 20.5437 35.4441 22.8523C35.4441 25.2236 35.9362 27.2728 36.925 29.0088C37.9138 30.7403 39.3187 32.078 41.1441 33.0221C42.9696 33.9661 45.1396 34.4359 47.663 34.4359C48.8486 34.4359 50.1327 34.2748 51.5152 33.9572C52.8977 33.6395 54.1192 33.1429 55.184 32.4762C55.7298 32.1407 56.1191 31.7469 56.3473 31.2906C56.5755 30.8342 56.6605 30.3868 56.5978 29.9439C56.5352 29.5054 56.3607 29.1296 56.0744 28.8253C55.7835 28.5211 55.3988 28.3466 54.9111 28.3018C54.4234 28.2571 53.8641 28.4137 53.2243 28.7806C52.3429 29.2683 51.4078 29.6083 50.419 29.8052C49.4303 30.002 48.5399 30.1004 47.7524 30.1004C45.4706 30.1004 43.7481 29.4875 42.5759 28.2526C41.6497 27.2773 41.0949 25.8948 40.9025 24.1275H54.6829C55.3898 24.1275 55.9267 23.9843 56.307 23.6979ZM43.587 15.9935C44.4819 15.3984 45.5691 15.1031 46.8487 15.1031C48.003 15.1031 48.9694 15.3537 49.7434 15.8548C50.5175 16.3559 51.1125 17.0807 51.5197 18.0203C51.8597 18.8032 52.0521 19.7518 52.1103 20.8479H40.9294C41.0368 19.9844 41.2336 19.1925 41.5334 18.499C42.0077 17.4207 42.6922 16.5841 43.587 15.9935Z"
              fill="#570D48"
            />
            <path
              d="M81.1298 23.6979C81.5101 23.4071 81.698 22.991 81.698 22.4452C81.698 20.7137 81.4609 19.1567 80.9911 17.7697C80.5213 16.3872 79.8367 15.2105 78.9374 14.2351C78.0426 13.2643 76.9599 12.5171 75.7026 12.0025C74.4409 11.488 73.0181 11.2285 71.4388 11.2285C69.2822 11.2285 67.3584 11.7207 65.6716 12.7095C63.9849 13.6982 62.665 15.0584 61.703 16.7899C60.7456 18.5214 60.2668 20.5437 60.2668 22.8523C60.2668 25.2236 60.759 27.2728 61.7478 29.0088C62.7366 30.7403 64.1415 32.078 65.9669 33.0221C67.7924 33.9661 69.9623 34.4359 72.4857 34.4359C73.6714 34.4359 74.9554 34.2748 76.338 33.9572C77.7205 33.6395 78.9419 33.1429 80.0068 32.4762C80.5526 32.1407 80.9419 31.7469 81.17 31.2906C81.3982 30.8342 81.4832 30.3868 81.4206 29.9439C81.3579 29.5054 81.1835 29.1296 80.8971 28.8253C80.6063 28.5211 80.2215 28.3466 79.7338 28.3018C79.2462 28.2571 78.6869 28.4137 78.0471 28.7806C77.1657 29.2683 76.2306 29.6083 75.2418 29.8052C74.253 30.002 73.3627 30.1004 72.5752 30.1004C70.2934 30.1004 68.5709 29.4875 67.3986 28.2526C66.468 27.2773 65.9177 25.8948 65.7253 24.1275H79.5057C80.2081 24.1275 80.7495 23.9843 81.1298 23.6979ZM68.4098 15.9935C69.3046 15.3984 70.3918 15.1031 71.6714 15.1031C72.8258 15.1031 73.7922 15.3537 74.5662 15.8548C75.3402 16.3559 75.9353 17.0807 76.3424 18.0203C76.6825 18.8032 76.8749 19.7518 76.933 20.8479H65.7521C65.8595 19.9844 66.0564 19.1925 66.3562 18.499C66.8259 17.4207 67.5105 16.5841 68.4098 15.9935Z"
              fill="#570D48"
            />
            <path
              d="M97.9931 21.3941L93.434 20.5261C92.5526 20.374 91.8993 20.0876 91.4743 19.6581C91.0492 19.2331 90.8345 18.7006 90.8345 18.0608C90.8345 17.2108 91.1924 16.5262 91.9038 16.0072C92.6197 15.4927 93.7203 15.2332 95.2102 15.2332C96.0021 15.2332 96.8298 15.3406 97.6933 15.5508C98.5613 15.7656 99.4651 16.1146 100.405 16.5978C100.919 16.8394 101.385 16.9244 101.796 16.8483C102.208 16.7723 102.548 16.5754 102.821 16.2533C103.094 15.9356 103.277 15.5687 103.367 15.1571C103.456 14.7455 103.42 14.3428 103.255 13.9491C103.089 13.5554 102.776 13.2332 102.32 12.9916C101.228 12.3832 100.091 11.9357 98.9237 11.6449C97.7515 11.3541 96.4987 11.2109 95.161 11.2109C93.3087 11.2109 91.6667 11.5017 90.235 12.0789C88.8077 12.6561 87.6892 13.4793 86.8838 14.5397C86.0785 15.6045 85.6758 16.8662 85.6758 18.3248C85.6758 19.9355 86.168 21.2509 87.1567 22.2665C88.1455 23.2866 89.5817 23.9757 91.4653 24.3425L96.0245 25.2105C96.9641 25.394 97.671 25.6758 98.1452 26.0517C98.615 26.432 98.8521 26.9733 98.8521 27.6713C98.8521 28.4901 98.4942 29.1522 97.7828 29.6533C97.067 30.1544 95.9842 30.405 94.5212 30.405C93.4876 30.405 92.4407 30.2931 91.3759 30.065C90.311 29.8368 89.1701 29.4341 87.9576 28.8569C87.4699 28.6153 87.0225 28.5393 86.6109 28.6288C86.1993 28.7182 85.8637 28.9196 85.6087 29.2194C85.3492 29.5236 85.1971 29.8815 85.1523 30.2931C85.1076 30.7048 85.1836 31.1119 85.3805 31.5235C85.5774 31.9352 85.9219 32.2931 86.4051 32.5928C87.5594 33.264 88.8659 33.7338 90.3244 34.0067C91.783 34.2796 93.1655 34.4183 94.472 34.4183C97.3578 34.4183 99.6709 33.7874 101.402 32.5257C103.134 31.264 104.002 29.5236 104.002 27.3044C104.002 25.6624 103.492 24.356 102.476 23.3851C101.465 22.4276 99.9662 21.761 97.9931 21.3941Z"
              fill="#570D48"
            />
            <path
              d="M125.603 12.3203C124.448 11.6536 122.972 11.3181 121.182 11.3181C119.388 11.3181 117.786 11.7342 116.372 12.5708C115.348 13.1793 114.52 13.9981 113.889 15.0137V4.43686C113.889 3.49281 113.639 2.78142 113.138 2.29374C112.637 1.80606 111.93 1.56445 111.017 1.56445C110.104 1.56445 109.406 1.80606 108.918 2.29374C108.431 2.78142 108.189 3.49281 108.189 4.43686V31.5188C108.189 32.4629 108.431 33.1832 108.918 33.6843C109.406 34.1854 110.104 34.436 111.017 34.436C112.932 34.436 113.889 33.4651 113.889 31.5188V21.5325C113.889 19.8011 114.381 18.4096 115.37 17.3627C116.359 16.3157 117.688 15.7878 119.361 15.7878C120.73 15.7878 121.741 16.1815 122.395 16.9734C123.048 17.7653 123.374 19.027 123.374 20.7585V31.5188C123.374 32.4629 123.625 33.1832 124.126 33.6843C124.627 34.1854 125.334 34.436 126.247 34.436C127.16 34.436 127.858 34.1854 128.345 33.6843C128.833 33.1832 129.074 32.4629 129.074 31.5188V20.4856C129.074 18.4185 128.784 16.7094 128.207 15.3582C127.625 14.0026 126.761 12.9914 125.603 12.3203Z"
              fill="#570D48"
            />
            <path
              d="M150.618 12.6423C148.918 11.6983 146.909 11.2285 144.6 11.2285C142.869 11.2285 141.303 11.497 139.902 12.0249C138.506 12.5573 137.303 13.3314 136.301 14.3515C135.298 15.3716 134.529 16.5841 133.996 17.9979C133.464 19.4117 133.2 21.0135 133.2 22.8076C133.2 25.1789 133.67 27.237 134.614 28.9864C135.553 30.7358 136.878 32.078 138.582 33.0221C140.283 33.9661 142.291 34.4359 144.6 34.4359C146.332 34.4359 147.897 34.1674 149.298 33.6395C150.694 33.1071 151.897 32.333 152.9 31.3129C153.902 30.2928 154.671 29.0714 155.204 27.6441C155.736 26.2169 156 24.6062 156 22.8121C156 20.4408 155.53 18.3916 154.586 16.6557C153.642 14.9197 152.322 13.5819 150.618 12.6423ZM149.548 26.8433C149.079 27.9215 148.416 28.7358 147.566 29.2817C146.716 29.8275 145.728 30.1004 144.605 30.1004C142.904 30.1004 141.535 29.4875 140.502 28.2526C139.468 27.0222 138.954 25.2057 138.954 22.8031C138.954 21.1924 139.191 19.8457 139.661 18.7674C140.13 17.6892 140.793 16.8838 141.643 16.3514C142.493 15.819 143.482 15.555 144.605 15.555C146.305 15.555 147.674 16.1545 148.707 17.3536C149.741 18.5527 150.255 20.3692 150.255 22.8031C150.255 24.4183 150.018 25.765 149.548 26.8433Z"
              fill="#570D48"
            />
            <path
              d="M15.5118 34.4312C14.1249 34.4312 12.9571 33.2635 12.9571 31.8765V20.1811C12.9705 18.0156 11.1675 16.2662 9.03329 16.302C6.89913 16.2662 5.10052 18.0201 5.10947 20.1811V31.8765C5.10947 33.2858 3.96409 34.4312 2.55473 34.4312C1.18117 34.4312 0 33.2456 0 31.8765C0 31.872 0 20.2214 0 20.2214C0 17.7248 1.01115 15.4654 2.64869 13.8323C4.28623 12.1948 6.54119 11.1836 9.03329 11.1836C11.5746 11.1836 13.8743 12.235 15.5163 13.9262C17.1539 12.235 19.4536 11.1836 21.9993 11.1836C24.4959 11.1836 26.7509 12.1948 28.3839 13.8323C30.0215 15.4698 31.0326 17.7293 31.0326 20.2214C31.0326 20.2214 31.0326 31.872 31.0326 31.8765C31.0326 33.2456 29.8515 34.4312 28.4779 34.4312C27.0686 34.4312 25.9232 33.2858 25.9232 31.8765V20.1811C25.9366 18.0156 24.1335 16.2662 21.9993 16.302C19.8652 16.2662 18.0666 18.0201 18.0755 20.1811V31.8765C18.0666 33.2635 16.8988 34.4312 15.5118 34.4312Z"
              fill="#570D48"
            />
          </g>
          <defs>
            <clipPath id="clip0_2271_104976">
              <rect width="100%" height="100%" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Link>
      <div className="search-bar v-center">
        <SearchBar />
      </div>
      <nav className="nav">
        <ul className="menu">
          <li className="menu-item v-center menu-item--download-app nav-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="nav-menu-icon"
              viewBox="0 0 16 24"
            >
              <path
                fill="#333"
                fillRule="evenodd"
                d="M4.16 1.872h7.68c.822 0 1.488.666 1.488 1.488v.103H2.672V3.36c0-.822.666-1.488 1.488-1.488zM2.672 5.335v11.469h10.656V5.335H2.672zm0 15.305v-1.964h10.656v1.964c0 .822-.666 1.488-1.488 1.488H4.16a1.488 1.488 0 01-1.488-1.488zM.8 3.36A3.36 3.36 0 014.16 0h7.68a3.36 3.36 0 013.36 3.36v17.28A3.36 3.36 0 0111.84 24H4.16A3.36 3.36 0 01.8 20.64V3.36zm6 16.447a.6.6 0 000 1.2h2.4a.6.6 0 100-1.2H6.8z"
                clipRule="evenodd"
              ></path>
            </svg>
            <a href="#" className="link nav-link border-b-2">
              Download App
            </a>
          </li>
          <li className="menu-item v-center">
            <a href="#" className="link nav-link border-b-2">
              Become a Supplier
            </a>
          </li>
          <li className="menu-item v-center">
            <a href="#" className="link nav-link border-b-2">
              Newsroom
            </a>
          </li>
        </ul>
      </nav>
      <a href="#" className="link nav-link nav-hover profile-link">
        <span className="nav-actions">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="nav-icon"
            viewBox="0 0 24 24"
          >
            <g clipPath="url(#user_svg__a)">
              <path
                fill="#333"
                d="M15.316 13.016c1.512-1.058 2.516-2.797 2.516-4.784A5.835 5.835 0 0012 2.4a5.835 5.835 0 00-5.832 5.832 5.79 5.79 0 002.517 4.784C4.343 14.291 1.2 17.996 1.2 22.37v.022c0 .896.843 1.609 1.825 1.609h17.95c.983 0 1.825-.713 1.825-1.61v-.02c0-4.375-3.143-8.08-7.484-9.354zM7.853 8.232a4.148 4.148 0 018.294 0 4.148 4.148 0 01-8.294 0zm13.122 14.083H3.025a.245.245 0 01-.14-.032c.054-4.45 4.126-8.057 9.115-8.057 4.99 0 9.05 3.596 9.115 8.057a.245.245 0 01-.14.032z"
              ></path>
            </g>
            <defs>
              <clipPath id="user_svg__a">
                <path
                  fill="#fff"
                  d="M0 0h21.6v21.6H0z"
                  transform="translate(1.2 2.4)"
                ></path>
              </clipPath>
            </defs>
          </svg>
          <span>Profile</span>
        </span>
        <div className="account-options">
          {isLoggedIn ? (
            <button className="btn btn--full" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="link btn btn--full">
              Login
            </Link>
          )}
        </div>
      </a>
      <Link to="/checkout" className="link nav-link">
        <span className="nav-actions">
          <div className="cart-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="nav-icon"
              viewBox="0 0 20 20"
            >
              <path
                stroke="#666"
                strokeLinecap="round"
                strokeWidth="1.5"
                d="M4.987 5.469l1.848 7.2a1 1 0 00.968.752h8.675a1 1 0 00.962-.726l1.697-5.952a1 1 0 00-.962-1.274H4.987zm0 0l-.943-3.248a1 1 0 00-.96-.721H1"
              ></path>
              <ellipse
                cx="9.421"
                cy="16.744"
                stroke="#666"
                strokeWidth="1.5"
                rx="1.243"
                ry="1.256"
              ></ellipse>
              <ellipse
                cx="15.221"
                cy="16.744"
                stroke="#666"
                strokeWidth="1.5"
                rx="1.243"
                ry="1.256"
              ></ellipse>
            </svg>
            <span className="item-count">{itemsQuantity}</span>
          </div>
          <span>Cart</span>
        </span>
      </Link>
    </div>
  );
};

export default Header;
