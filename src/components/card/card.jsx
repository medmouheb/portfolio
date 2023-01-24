import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { IconAppWindow, IconBrandGithub } from '@tabler/icons';


function ProjectCard({content}) {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={content.image}
                    height={160}
                />
            </Card.Section>
            <Text weight={700}>{content.title}</Text>



            <Text size="sm" color="dimmed">
            {content.discription}
            </Text>

            <Text c="dimmed" fz="sm"><span style={{ fontWeight: "500" }}>fullstuck: </span> {content.stuck}</Text>

            {/* <div style={{display:"flex", justifyContent:"space-between"}}>
                <Button compact  variant="subtle" color="dark">
                    <IconAppWindow /> live priview
                </Button>
                <Button compact  variant="subtle" color="dark">
                    <IconBrandGithub /> source code
                </Button>
            </div> */}
        </Card>
    );
}
export default ProjectCard