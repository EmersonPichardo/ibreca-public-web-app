import { Typography } from "antd"

import PageContent from "../../../components/pageContent/pageContent"

import './mision&vision.css';

const { Title, Paragraph } = Typography

export default function MisionVision() {
  return (
    <PageContent title="Nuestra historia">
      <div className="text-wrapper">
        <Title level={2}>Misión</Title>
        <Paragraph>
          Mediante el evangelio de nuestro Señor Jesucristo alcanzar nuestra comunidad para Cristo,
          siendo una congregación que prepare y envíe discípulos a la gran comisión.
        </Paragraph>

        <Title level={2}>Visión</Title>
        <Paragraph>
          Ser una iglesia de crecimiento constante numérica y espiritualmente guiada por el Espíritu
          Santo y la palabra de Dios.
        </Paragraph>

        <Title level={2}>Propósito</Title>
        <Paragraph>
          <ul>
            <li>
              Ser una iglesia que muestre a Cristo en nuestro diario vivir.
            </li>
            <li>
              Ser una iglesia que persevera enseñando sana doctrina.
            </li>
            <li>
              Ser una iglesia que que practica la comunión con los hermanos.
            </li>
          </ul>

          Con el fin de que el Señor añada cada día a los que han de ser salvos.
          Hechos 2:24,27
        </Paragraph>
      </div>
    </PageContent>
  )
}