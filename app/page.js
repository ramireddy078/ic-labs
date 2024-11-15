import Home from "@/components/Home/Home";
import React from "react";

function page() {
  return (
    <div>
      {/* <div className="bg-blue-400 text-white text-5xl p-5">
        <h1>Welcome to home page</h1>
        <Link href={"/courses"}>
          <h1>courses</h1>
        </Link>
      </div>
      <RecordView /> */}
      <Home />
    </div>
  );
}

export default page;
