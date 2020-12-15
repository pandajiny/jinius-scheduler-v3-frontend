import { serverUrl } from "../../App";
import { doPostRequest } from "../HttpsModles";

export const addTodo = async (
  request: AddTodoRequest
): Promise<ActionResult> => {
  const url = `${serverUrl}/todo`;
  const result = await doPostRequest<ActionResult>({
    url,
    body: request,
  });

  return result;
};