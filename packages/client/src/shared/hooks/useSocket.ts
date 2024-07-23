import { useEffect, useMemo } from 'react'
import { io, Socket } from 'socket.io-client'

// TODO 서버의 URL
const SOCKET_SERVER_URL = ''

const useSocket = (): Socket => {
    const socket = useMemo(() => {
        return io(SOCKET_SERVER_URL, {
            autoConnect: false, // 자동 연결 방지
        })
    }, [])

    useEffect(() => {
        socket.connect()
        return () => {
            socket.disconnect()
        }
    }, [socket])

    return socket
}

export default useSocket
