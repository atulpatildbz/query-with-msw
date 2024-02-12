import { Link, Outlet } from "react-router-dom";

function App() {
  // const { data: postListData, isLoading: postListLoading } = usePostList();
  // if (postListLoading) return <>Loading...</>;

  // pretty print the postListData. Show some hyperlink so that i can click and see the post details
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between p-1 ">
          <div className="flex flex-row flex-nowrap space-x-4">
            <Link
              to="/org/0"
              className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white hover:bg-[#717171]"
              aria-current="page"
            >
              0
            </Link>
            <Link
              to="/org/1"
              className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white hover:bg-[#717171]"
              aria-current="page"
            >
              1
            </Link>
            <Link
              to="/org/2"
              className="block py-2 px-3 rounded md:bg-transparent md:p-0 dark:text-white hover:bg-[#717171]"
              aria-current="page"
            >
              2
            </Link>
          </div>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
