import { MoonIcon } from '@chakra-ui/icons';
import { Button, Flex, FormControl, FormLabel, Heading, IconButton, Input, InputGroup, InputRightElement, useColorMode } from '@chakra-ui/react';
import { dialog } from '@tauri-apps/api';
import React, { useState } from 'react'

const PATTERN = "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234c5a70' fill-opacity='0.21'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")";

const App = () => {
    const [serverAddress, setServerAddress] = useState("");
    const [username, setUsername] = useState("");
    const [mediaPlayer, setMediaPlayer] = useState("");
    const [mediaFile, setMediaFile] = useState("");

    const { colorMode, toggleColorMode } = useColorMode();

    const bgColor = colorMode === "dark" ? "gray.700" : "gray.200"
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center" flexDirection="column" bgImage={PATTERN}>
            <Flex width="md" minWidth="md" p="10" flexDirection="column" height="max" backgroundColor={bgColor}>
                <Heading mb={6}>Placeholder</Heading>

                <FormControl id="server address" mb={3}>
                    <FormLabel mb={2}>Server address</FormLabel>
                    <Input value={serverAddress} variant={'filled'} onChange={e => setServerAddress(e.target.value)}/>
                </FormControl>

                <FormControl id="username" mb={3}>
                    <FormLabel mb={2}>Username</FormLabel>
                    <Input value={username} variant={'filled'} onChange={e => setUsername(e.target.value)}/>
                </FormControl>

                <FormControl id="media player" mb={3}>
                    <FormLabel mb={2}>Path to Media Player</FormLabel>
                    <InputGroup>
                        <Input pr="5rem" value={mediaPlayer} variant={'filled'} onChange={e => setMediaPlayer(e.target.value)}/>
                        <InputRightElement width="5rem">
                            <Button size="sm" onClick={() => { dialog.open().then(path => setMediaPlayer(path as string)) }}>Browse</Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl id="media file" mb={3}>
                    <FormLabel mb={2} for>Path to Media File</FormLabel>
                    <InputGroup>
                        <Input pr="5rem" value={mediaFile} variant={'filled'} onChange={e => setMediaFile(e.target.value)}/>
                        <InputRightElement width="5rem">
                            <Button size="sm" onClick={() => { dialog.open().then(path => setMediaFile(path as string)) }}>Browse</Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Button type="submit" mt={8}>Log in</Button>
            </Flex>
            <Flex width="md" mt={4} direction="row-reverse">
                <IconButton aria-label="Toggle color mode" icon={<MoonIcon/>} onClick={toggleColorMode}/>
            </Flex>
        </Flex>
    );
};

export default App;