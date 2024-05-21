import { UList } from "~/components/ui/list";

export default function HomePage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-12 p-4">
      <UList>
        <li>file</li>

        <li>
          folder
          <UList>
            <li>&#10551; file</li>
            <li>
              &#10551; folder
              <UList>
                <li>&#10551; file</li>
                <li>&#10551; file</li>
              </UList>
            </li>
            <li>
              &#10551; folder
              <UList>
                <li>&#10551; file</li>
              </UList>
            </li>
          </UList>
        </li>

        <li>
          folder
          <UList>
            <li>&#10551; file</li>
            <li>
              &#10551; folder
              <UList>
                <li>&#10551; file</li>
                <li>&#10551; file</li>
              </UList>
            </li>
          </UList>
        </li>
      </UList>
    </div>
  );
}
