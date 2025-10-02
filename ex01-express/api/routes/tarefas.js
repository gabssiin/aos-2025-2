import { Router } from "express";

const router = Router();

router.get("/tarefas", (req, res) => {
  return res.send(Object.values(req.context.models.tarefas));
});

router.get("/:objectId", (req, res) => {
  return res.send(req.context.models.users[req.params.objectId]);
});

router.post("/", (req, res) => {
  return res.send("POST HTTP method on user resource");
});

router.put("/:objectId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.objectId} resource`);
});

router.delete("/:objectId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.objectId} resource`);
});

export default router;
