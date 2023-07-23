import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ajustar CSS</td>
              <td>20min</td>
              <td>Há cerca de 2 meses</td>

              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
            <tr>
              <td>Ajustar CSS</td>
              <td>20min</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="yellow">Em Andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Ajustar CSS</td>
              <td>20min</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="yellow">Em Andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Ajustar CSS</td>
              <td>20min</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="red">Cancelada</Status>
              </td>
            </tr>
            <tr>
              <td>Ajustar CSS</td>
              <td>20min</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="green">Concluído</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
