import React from 'react';

export default function Knowledge() {
  return (
    <section className="mx-auto mt-20 max-w-4xl space-y-6 px-4 sm:px-0">
      <table id="skills-table">
        <tbody>
          <tr className="py-4 align-top">
            <td>Linguagens:</td>
            <td className="ps-6">HTML, CSS, JavaScript, SQL .</td>
          </tr>
          <tr className="py-4 align-top">
            <td>Bibliotecas/Frameworks: </td>
            <td className="ps-6">
              React.Js, Next.Js, TailwindCSS, Styled Components.
            </td>
          </tr>
          <tr className="py-4 align-top">
            <td>Back-End: </td>
            <td className="ps-6">Node.Js, Express.</td>
          </tr>
          <tr className="py-4 align-top">
            <td>Banco de Dados:</td>
            <td className="ps-6">PostgreSQL</td>
          </tr>
          <tr className="py-4 align-top">
            <td>Ferramentas:</td>
            <td className="ps-6">
              Docker, Insomnia, VS Code, GIT, Github, Figma, Notion
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
