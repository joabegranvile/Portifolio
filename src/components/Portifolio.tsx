import { Container, Grid, Paper, Typography } from "@mui/material";
import React from "react";

interface Project {
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  const projects: Project[] = [
    { title: "Projeto 1", description: "Descricao 1" },
    { title: "Projeto 2", description: "Descricao 1" },
    { title: "Projeto 3", description: "Descricao 1" },
  ];
  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Meus Projetos
      </Typography>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{project.title}</Typography>
              <Typography>{project.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
