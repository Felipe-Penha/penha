import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/portfolio.module.scss'
import {
  motion,
  useSpring,
  useTransform,
  useViewportScroll,
} from 'framer-motion'

export default function Portfolio() {
  const offsetHeight = 300
  // Vertical scroll distance in pixels.
  const { scrollY } = useViewportScroll()
  // Transforms scroll and image height values to opacity values
  const yRange = useTransform(scrollY, [offsetHeight, 0], [1, 0])
  const opacity = useSpring(yRange, { stiffness: 400, damping: 40 })

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            delay: 0.5,
          },
        },
      }}
      className={styles.body}
      id={styles.body}>
      <Head>
        <title>Penha.</title>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css'
        />
      </Head>
      <header className={styles.header}>
        <div className={styles.grid1} id={styles.grid1}>
          <div className={styles.textContainer} id={styles.textContainer}>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 0.6,
                    ease: 'easeInOut',
                  },
                },
              }}
              className={styles.brand}
              id={styles.brand}>
              <a href='/' className={styles.link}>
                penha.
              </a>
            </motion.div>
            <div className={styles.headerGroup} id={styles.headerGroup}>
              <motion.div
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.7,
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 1,
                      ease: 'easeInOut',
                    },
                    scale: 1,
                  },
                }}
                className={styles.title}
                id={styles.title}>
                Criação de Websites
              </motion.div>
              <motion.div
                initial='hidden'
                animate='visible'
                variants={{
                  hidden: {
                    opacity: 0,
                    translateY: '20%',
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 1.3,
                      ease: 'easeInOut',
                    },
                    translateY: '0%',
                  },
                }}
                className={styles.description}
                id={styles.description}>
                Ainda não tem um site para por o seu negócio na internet?
              </motion.div>
              <div className={styles.contact} id={styles.contact}>
                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={{
                    hidden: {
                      opacity: 0,
                    },
                    visible: {
                      opacity: 1,
                      transition: {
                        delay: 2,
                        ease: 'easeIn',
                      },
                    },
                  }}
                  className={styles.contactText}
                  id={styles.contactText}>
                  Contato
                </motion.div>
                <div className={styles.contactLinks} id={styles.contactLinks}>
                  <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={{
                      hidden: {
                        opacity: 0,
                        scale: 1.2,
                      },
                      visible: {
                        opacity: 1,
                        transition: {
                          delay: 1.6,
                          ease: 'easeIn',
                        },
                        scale: 1,
                      },
                    }}>
                    <a
                      target='_blank'
                      href='https://www.linkedin.com/in/felipe-penha-966a01ab/'
                      className={styles.link}>
                      <i className={`fab fa-linkedin fa-lg`} />
                    </a>
                  </motion.div>

                  <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={{
                      hidden: {
                        opacity: 0,
                        scale: 1.2,
                      },
                      visible: {
                        opacity: 1,
                        transition: {
                          delay: 1.8,
                          ease: 'easeIn',
                        },
                        scale: 1,
                      },
                    }}>
                    <a
                      target='_blank'
                      href='https://www.instagram.com/dev.penha/'
                      className={styles.link}>
                      <i className={`fab fa-instagram fa-lg`} />
                    </a>
                  </motion.div>

                  <motion.div
                    initial='hidden'
                    animate='visible'
                    variants={{
                      hidden: {
                        opacity: 0,
                        scale: 1.2,
                      },
                      visible: {
                        opacity: 1,
                        transition: {
                          delay: 2,
                          ease: 'easeIn',
                        },
                        scale: 1,
                      },
                    }}>
                    <a
                      target='_blank'
                      href='https://api.whatsapp.com/send?phone=5527998752135'
                      className={styles.link}>
                      <i className={`fab fa-whatsapp fa-lg`} />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={{
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    delay: 2.5,
                    ease: 'easeInOut',
                  },
                },
              }}
              className={styles.arrows}>
              <div className={styles.arrowContainer}>
            <div className={styles.arrowDown}></div>
        </div>
            </motion.div>
          </div>
        </div>
      </header>

      <motion.div style={{ opacity }}>
        <main className={styles.main} id={styles.main}>
          <section className={styles.page1} id={styles.page1}>
            <div className={styles.sectionTitle} id={styles.sectionTitle}>
              <div className={styles.headerTitle} id={styles.headerTitle}>
                <h3>Serviço</h3>
              </div>
              <div className={styles.line} id={styles.line}></div>
              <div
                className={styles.sectionDescription}
                id={styles.sectionDescription}>
                <p>
                  Trabalho como{' '}
                  <span className={styles.freelancer}>freelancer</span> criando
                  todo tipo de website, desde páginas simples à lojas virtuais.
                </p>
              </div>
            </div>

            <div className={styles.cardsGrid} id={styles.cardsGrid}>
              <div className={styles.card} id={styles.card}>
                <div className={styles.cardImage}>
                  <i
                    className='far fa-window-restore fa-lg'
                    id={styles.cardImage}
                  />
                </div>
                <h3 className={styles.cardTitle} id={styles.cardTitle}>
                  UI/UX
                </h3>
                <div
                  className={styles.cardDescription}
                  id={styles.cardDescription}>
                  <p>Landing Pages, Web App</p>
                </div>
              </div>
              <div className={styles.card} id={styles.card}>
                <div className={styles.cardImage}>
                  <i
                    className='fas fa-laptop-code fa-lg'
                    id={styles.cardImage}
                  />
                </div>
                <h3 className={styles.cardTitle} id={styles.cardTitle}>
                  Front End
                </h3>
                <div
                  className={styles.cardDescription}
                  id={styles.cardDescription}>
                  <p>React, Next.js, Bootstrap</p>
                </div>
              </div>
              <div className={styles.card} id={styles.card}>
                <div className={styles.cardImage}>
                  <i className='fas fa-server fa-lg' id={styles.cardImage} />
                </div>
                <h3 className={styles.cardTitle} id={styles.cardTitle}>
                  Back End
                </h3>
                <div
                  className={styles.cardDescription}
                  id={styles.cardDescription}>
                  <p>Node.js, PHP, Django</p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.page2} id={styles.page2}>
            <div className={styles.sectionTitle} id={styles.sectionTitle}>
              <div className={styles.headerTitle} id={styles.headerTitle}>
                <h3>Sobre Mim</h3>
              </div>
              <div className={styles.line} id={styles.line}></div>
            </div>
            <div className={styles.grid2} id={styles.grid2}>
              <div className={styles.sectionAbout} id={styles.sectionAbout}>
                <div className={styles.sectionImage} id={styles.sectionImage}>
                  <img
                    className={styles.image}
                    id={styles.image}
                    src='/penha.png'
                    alt='Felipe Penha'
                  />
                  <div className={styles.contact} id={styles.contact}>
                    <div className={styles.contactText} id={styles.contactText}>
                      Contato
                    </div>
                    <div
                      className={styles.contactLinks}
                      id={styles.contactLinks}>
                      <a
                        target='_blank'
                        href='https://www.linkedin.com/in/felipe-penha-966a01ab/'
                        className={styles.link}>
                        <i className={`fab fa-linkedin fa-lg`} />
                      </a>

                      <a
                        target='_blank'
                        href='https://www.instagram.com/dev.penha/'
                        className={styles.link}>
                        <i className={`fab fa-instagram fa-lg`} />
                      </a>

                      <a
                        target='_blank'
                        href='https://api.whatsapp.com/send?phone=5527998752135'
                        className={styles.link}>
                        <i className={`fab fa-whatsapp fa-lg`} />
                      </a>
                    </div>
                  </div>
                </div>
                <p className={styles.aboutText} id={styles.aboutText}>
                  Meu nome é{' '}
                  <span className={styles.freelancer}>Felipe Penha</span>,
                  estudo licenciatura em física no Ifes, mas desde pequeno gosto
                  de informática. Em 2014, completei o curso de Suporte A
                  Hardware E Redes De Computadores (Senai) e no início de 2020
                  comecei a estudar programação mais a fundo, voltando-me para o
                  design e para o desenvolvimento web, visando trabalhar como{' '}
                  <span className={styles.freelancer}>freelancer</span>. Desde
                  então, estou aprendendo a utilizar algumas linguagens de
                  programação, frameworks e até mesmo a ilustrar no Inkscape e a
                  modelar e animar no Blender.
                </p>
              </div>
            </div>
          </section>
          <section className={styles.page3} id={styles.page3}>
            <div className={styles.sectionTitle} id={styles.sectionTitle}>
              <div className={styles.headerTitle} id={styles.headerTitle}>
                <h3>Projetos</h3>
              </div>
              <div className={styles.line} id={styles.line}></div>
              <div className={styles.sectionDescription}>
                <p id={styles.sectionDescription}>
                  Fiquem ligados porque esta seção está em constante atualização
                </p>
              </div>
            </div>

            <div className={styles.cardsGrid} id={styles.cardsGrid}>
              <a target='_blank' href='https://penhaproshop.herokuapp.com/'>
                <div className={styles.card} id={styles.card}>
                  <div className={styles.cardImage}>
                    <i
                      className={`fas fa-shopping-cart`}
                      id={styles.cardImage}
                    />
                  </div>
                  <h3 className={styles.cardTitle} id={styles.cardTitle}>
                    Proshop
                  </h3>
                  <div
                    className={styles.cardDescription}
                    id={styles.cardDescription}>
                    <p>Projeto de ecommerce feito com MERN</p>
                  </div>
                </div>
              </a>

              <a href='/'>
                {' '}
                <div className={styles.card} id={styles.card}>
                  <div className={styles.cardImage}>
                    <i className={`fas fa-book-open`} id={styles.cardImage} />
                  </div>
                  <h3 className={styles.cardTitle} id={styles.cardTitle}>
                    Portfolio
                  </h3>
                  <div
                    className={styles.cardDescription}
                    id={styles.cardDescription}>
                    <p>Projeto de portfolio feito com Next.js</p>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </main>
      </motion.div>
      <motion.div style={{ opacity }}>
        <footer className={styles.footer} id={styles.footer}>
          <section className={styles.footerGrid} id={styles.footerGrid}>
            <div className={styles.brand} id={styles.brand}>
              <a href='/' className={styles.link}>
                penha.
              </a>
            </div>
            <div className={styles.contact} id={styles.contact}>
              <div className={styles.contactText} id={styles.contactText}>
                Contato
              </div>
              <div className={styles.contactLinks} id={styles.contactLinks}>
                <a
                  target='_blank'
                  href='https://www.linkedin.com/in/felipe-penha-966a01ab/'
                  className={styles.link}>
                  <i className={`fab fa-linkedin fa-lg`} />
                </a>

                <a
                  target='_blank'
                  href='https://www.instagram.com/dev.penha/'
                  className={styles.link}>
                  <i className={`fab fa-instagram fa-lg`} />
                </a>

                <a
                  target='_blank'
                  href='https://api.whatsapp.com/send?phone=5527998752135'
                  className={styles.link}>
                  <i className={`fab fa-whatsapp fa-lg`} />
                </a>
              </div>
            </div>
          </section>
        </footer>
      </motion.div>
    </motion.div>
  )
}
