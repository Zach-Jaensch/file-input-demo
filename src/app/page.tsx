export default function HomePage() {
  return (
    <main>
      <div className="container flex flex-col items-center justify-center gap-12 p-4 ">
        <ul>
          <li>file</li>

          <li>
            folder
            <ul className="pl-4">
              <li>&#x21b3; file</li>
              <li>
                &#x21b3; folder
                <ul className="pl-4">
                  <li>&#x21b3; file</li>
                  <li>&#x21b3; file</li>
                </ul>
              </li>
              <li>
                &#x21b3; folder
                <ul className="pl-4">
                  <li>&#x21b3; file</li>
                </ul>
              </li>
            </ul>
          </li>

          <li>
            folder
            <ul className="pl-4">
              <li>&#x21b3; file</li>
              <li>
                &#x21b3; folder
                <ul className="pl-4">
                  <li>&#x21b3; file</li>
                  <li>&#x21b3; file</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </main>
  );
}
