---
import BackToHome from "../../components/BackToHome.astro";
import BaseLayout from "../../layouts/BaseLayout.astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "../../consts";
---

<BaseLayout title={SITE_TITLE} description={SITE_DESCRIPTION}>
  <div class="certifications-page">
    <BackToHome />
    
    <section class="certifications-content">
      <h2>📜 Certifications & Learning</h2>

      <p>
        All certifications listed below are publicly verifiable.
        Microsoft Learn progress is available through my
        <a href="https://learn.microsoft.com/en-us/users/albertocastrojimenez-0038/transcript?tab=tab-learning-paths"
           target="_blank" rel="noopener noreferrer">
          public transcript
        </a>.
      </p>

      <hr />

      <h2>🟦 Microsoft Learn — Power BI & Data Analysis</h2>
      <p class="subtitle"><em>Completed learning paths (100%). PL-300 exam pending.</em></p>

      <ul class="cert-list">
        <li>
          <span>Introducción al análisis de datos de Microsoft</span>
          <a href="https://learn.microsoft.com/en-us/users/albertocastrojimenez-0038/transcript?tab=tab-learning-paths" target="_blank" rel="noopener noreferrer">View Transcript</a>
        </li>
        <li>
          <span>Preparación de datos para el análisis con Power BI</span>
          <a href="https://learn.microsoft.com/en-us/users/albertocastrojimenez-0038/transcript?tab=tab-learning-paths" target="_blank" rel="noopener noreferrer">View Transcript</a>
        </li>
        <li>
          <span>Preparar y visualizar datos con Microsoft Power BI</span>
          <a href="https://learn.microsoft.com/en-us/users/albertocastrojimenez-0038/transcript?tab=tab-learning-paths" target="_blank" rel="noopener noreferrer">View Transcript</a>
        </li>
      </ul>

      <hr />

      <h2>🟦 Microsoft & Azure — Data & Cloud (Coursera)</h2>
      <p class="subtitle"><em>Issued by Microsoft, delivered through Coursera.</em></p>

      <ul class="cert-list">
        <li>
          <span>Explore Core Data Concepts in Microsoft Azure</span>
          <a href="https://coursera.org/verify/A3FGEFNbGmS" target="_blank" rel="noopener noreferrer">Verify</a>
        </li>
        <li>
          <span>Microsoft Azure SQL</span>
          <a href="https://coursera.org/verify/A3PiGEFNbGmS" target="_blank" rel="noopener noreferrer">Verify</a>
        </li>
        <li>
          <span>Microsoft Azure Cosmos DB</span>
          <a href="https://coursera.org/verify/YXTkT3GG2MAB" target="_blank" rel="noopener noreferrer">Verify</a>
        </li>
        <li>
          <span>Modern Data Warehouse Analytics in Microsoft Azure</span>
          <a href="https://coursera.org/verify/EHF9bC5dCZm1L" target="_blank" rel="noopener noreferrer">Verify</a>
        </li>
      </ul>

      <hr />

      <h2>🤖 Generative AI — Encora Training Path (Coursera)</h2>

      <ul class="cert-list">
        <li>
          <span>Gen AI Training Path — Foundational Track</span>
          <a href="https://www.credly.com/badges/jEnXgYCxTdeJ14GAsd3Xzg" target="_blank" rel="noopener noreferrer">View Badge</a>
        </li>
        <li>
          <span>Gen AI Training Path — Technical Track</span>
          <a href="https://www.credly.com/badges/sDqpF-8iSya6qRfvtsmiwC" target="_blank" rel="noopener noreferrer">View Badge</a>
        </li>
      </ul>

      <hr />

      <h2>📊 Data Analytics, Python & Visualization</h2>

      <ul class="cert-list">
        <li>
          <span>Storytelling With Data</span>
          <a href="https://www.udemy.com/certificate/UC-fa545369-d41e-46aa-bffb-fdc594d1f769/" target="_blank" rel="noopener noreferrer">Verify</a>
        </li>
        <li>
          <span>Introducción a Python</span>
          <span class="cert-id">Cert. #45404627</span>
        </li>
        <li>
          <span>R: Data Science y Análisis de Datos</span>
          <a href="https://www.udemy.com/certificate/UC-cfb2800a-1572-4aae-869a-c32cc9fd5567/" target="_blank" rel="noopener noreferrer">Verify</a>
        </li>
      </ul>

      <hr />

      <h2>🎓 Academic Background</h2>

      <ul class="cert-list">
        <li><span>Bachelor's in Software Engineering</span> <span class="institution">UTN</span></li>
        <li><span>Diploma in Information Technologies</span> <span class="institution">UTN</span></li>
        <li><span>English for Work — Modules 1 & 2 (336h)</span> <span class="institution">UTN</span></li>
        <li><span>High School Diploma</span> <span class="institution">MEP — CTP Regional San Carlos</span></li>
        <li><span>Technical Degree — IT Support</span> <span class="institution">MEP — CTP Regional San Carlos</span></li>
      </ul>
    </section>
  </div>
</BaseLayout>

<style>
  /* Contenedor principal sin restricciones estrechas */
  .certifications-page {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 1rem;
    box-sizing: border-box;
  }

  .certifications-content {
    width: 100%;
  }

  /* Estilos de lista limpia responsiva */
  .cert-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0 2rem 0;
  }

  .cert-list li {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 0.75rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); /* o #eee si es light theme */
  }

  .cert-list li span:first-child {
    font-weight: 500;
  }

  .cert-id, .institution {
    opacity: 0.7;
    font-size: 0.9em;
  }

  hr {
    margin: 2rem 0;
    opacity: 0.2;
  }

  /* Ajuste automático para pantallas pequeñas (móviles) */
  @media (max-width: 600px) {
    .certifications-page {
      padding: 0.75rem;
    }

    /* En móvil, apila el título del curso y el link de verificación verticalmente */
    .cert-list li {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.3rem;
      padding: 0.85rem 0;
    }

    .cert-list li a, .cert-id, .institution {
      font-size: 0.85rem;
    }
  }
</style>