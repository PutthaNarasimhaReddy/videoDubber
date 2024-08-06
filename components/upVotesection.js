// components/UpvoteSection.js
import { useState } from 'react';
import { Button, Card, Text } from '@mantine/core';

const UpvoteSection = () => {
  const [upvoted, setUpvoted] = useState(false);

  return (
    <Card className="p-6 m-4 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <Text size="lg" weight={500}>Product Title</Text>
          <Text color="dimmed">Product description goes here.</Text>
        </div>
        <Button
          variant={upvoted ? "filled" : "outline"}
          color={upvoted ? "blue" : "gray"}
          onClick={() => setUpvoted(!upvoted)}
        >
          {upvoted ? 'Upvoted' : 'Upvote'}
        </Button>
      </div>
    </Card>
  );
};

export default UpvoteSection;
